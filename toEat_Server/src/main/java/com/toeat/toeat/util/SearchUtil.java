package com.toeat.toeat.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.URLEncoder;

import com.toeat.toeat.vo.ResponseVo;

public class SearchUtil {
	private static final Logger logger = LoggerFactory.getLogger(SearchUtil.class);

	@Value("${kakao.restapi.key}")
	private String restApiKey;
    private static final String API_HOST  = "https://dapi.kakao.com";
    private static final String SEARCH_PATH = "/v2/local/search/keyword.json";
	
	private static List<String> category = new ArrayList<String>(Arrays.asList("디저트", "동남아음식", "인도음식", "양식", "한식", "중식", "일식", "분식", "패스트푸드", "뷔페"));
	
	public List<String> getCategory(){
		return category;
	}
	
	public String getQuery() {
		String query = "";
		return query;
	}
	
	public ResponseEntity<String> getSearchPlaceByKeyword() throws Exception {
        String queryString = "?query="+"맛집"+"&page="+"3"+"&size="+"3";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.add("Authorization", "KakaoAK " + restApiKey);
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        URI url = URI.create(API_HOST+SEARCH_PATH+queryString);
        RequestEntity<String> request = new RequestEntity<>(headers, HttpMethod.GET, url);
        ResponseEntity<String> response = restTemplate.exchange(request, String.class);

        return response;
    }
	/**
	 * Remote URL (GET)
	 * @param address
	 * @return
	 * @throws Exception
	 */
	public static ResponseVo getRequest(String address) throws Exception {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> responseEntity = restTemplate.getForEntity(address, String.class);
		HttpStatus status = responseEntity.getStatusCode();
		if (status == HttpStatus.OK) {
			return new ResponseVo("OK", responseEntity.getBody());
		} else {
			return new ResponseVo(status.toString(), responseEntity.getBody());
		}
	}
	
	public static int randInt(int min, int max) {
    	Random random = new Random(); // nextInt는 정상적인 경우 최대 값을 포함하지 않기 때문에, 1을 더함. 
    	int no = random.nextInt((max - min) + 1) + min;
    	return no; 
    }
}