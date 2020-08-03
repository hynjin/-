package com.toeat.toeat.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;

import com.toeat.toeat.vo.ResponseVo;

@Component
public class SearchUtil {
	private static final Logger logger = LoggerFactory.getLogger(SearchUtil.class);

	private static String restAPIKey;
    private static final String API_HOST  = "https://dapi.kakao.com";
    private static final String SEARCH_PATH = "/v2/local/search/keyword.json";
	
	private static List<String> category = new ArrayList<String>(Arrays.asList("디저트", "동남아음식", "인도음식", "양식", "한식", "중식", "일식", "분식", "패스트푸드", "뷔페"));
	
	public static List<String> getCategory(){
		return category;
	}
	
	@Value("${kakao.restapi.key}")
    public void setRestAPIKey(String key) {
        restAPIKey = key;
    }
	
	public static HttpHeaders getHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "KakaoAK " + restAPIKey);
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
		headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
		return headers;
	}

	public static String getQuery(List<String> keywords, int page) throws IOException {
		String query = "?query=";
		for(int i =0; i <keywords.size();i++) {
			query += URLEncoder.encode(keywords.get(i),"UTF-8");
		}
		query += "&page=" + page;
		return query;
	}
	
	public static String getQuery(List<String> keywords, int page, double x, double y, int radius) throws IOException {
		String query = "?query=";
		for(int i =0; i <keywords.size();i++) {
			query += URLEncoder.encode(keywords.get(i),"UTF-8");
		}
		query += "&page=" + page;
		query += "&x=" + x;
		query += "&y=" + y;
		query += "&radius=" + radius;
		return query;
	}
	
	public static String getQuery(List<String> keywords, int page, String rect) throws IOException {
		String query = "?query=";
		for(int i =0; i <keywords.size();i++) {
			query += URLEncoder.encode(keywords.get(i),"UTF-8");
		}
		query += "&page=" + page;
		query += "&rect=" + rect;
		return query;
	}

	
	public static URI getURL(List<String> keywords, int page) throws IOException {
		URI url = URI.create(API_HOST+SEARCH_PATH+SearchUtil.getQuery(keywords,page));
		return url;
	}
	
	public static ResponseEntity<String> getSearch(List<String> keywords) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        RequestEntity<String> request = new RequestEntity<>(SearchUtil.getHeaders(), HttpMethod.GET, SearchUtil.getURL(keywords,1));
        ResponseEntity<String> response = restTemplate.exchange(request, String.class);
        
        return response;
    }
	
	public static ResponseVo getSearchVo(List<String> keywords) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        RequestEntity<String> request = new RequestEntity<>(SearchUtil.getHeaders(), HttpMethod.GET, SearchUtil.getURL(keywords,1));
        ResponseEntity<String> response = restTemplate.exchange(request, String.class);
        HttpStatus status = response.getStatusCode();
        if (status == HttpStatus.OK) {
			return new ResponseVo("OK", response.getBody());
		} else {
			return new ResponseVo(status.toString(), response.getBody());
		}
    }
	
	public static int randInt(int min, int max) {
    	Random random = new Random(); // nextInt는 정상적인 경우 최대 값을 포함하지 않기 때문에, 1을 더함. 
    	int no = random.nextInt((max - min) + 1) + min;
    	return no; 
    }
}