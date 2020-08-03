package com.toeat.toeat.controller;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.toeat.toeat.util.SearchUtil;
import com.toeat.toeat.vo.ResponseVo;


@Controller
@RequestMapping("/search")
public class SearchController {
	
	private static final Logger logger = LoggerFactory.getLogger(SearchController.class);

	@RequestMapping(value = "/test", produces="text/html; charset=UTF-8")
	public String home(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println(SearchUtil.getHeaders().toString());
		System.out.println(SearchUtil.getCategory().toString());
		return "test/test";
	}
	
	@RequestMapping(value = "/")
	public ResponseEntity<String> search(HttpSession session) throws Exception {
        List<String> list = new ArrayList<String>(Arrays.asList("서울","맛집","한식"));
        ResponseEntity<String> response = SearchUtil.getSearch(list);

        return response;
	}

	@RequestMapping(value = "/search", produces="application/json; charset=UTF-8")
	@ResponseBody
	public String search(HttpServletRequest request, HttpServletResponse response, 
			@RequestParam Map<String,Object> param) {
		JSONObject obj = new JSONObject();
		List<String> keywords = new ArrayList<String>(Arrays.asList(param.get("query").toString()));
        logger.debug(param.get("query").toString());
		ResponseVo responseVo = new ResponseVo();
        try {
			responseVo = SearchUtil.getSearchVo(keywords);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        logger.debug(responseVo.getCode());
        obj.put("response", responseVo.getBody());
		return obj.toJSONString();
	}
}
