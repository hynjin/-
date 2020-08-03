package com.toeat.toeat.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SearchUtil {
	private static final Logger logger = LoggerFactory.getLogger(SearchUtil.class);
	
	private List<String> category = new ArrayList<String>(Arrays.asList("디저트", "동남아음식", "인도음식", "양식", "한식", "중식", "일식", "분식", "패스트푸드", "뷔페"));
	
	public List<String> getCategory(){
		return category;
	}
	
	
	
	public static int randInt(int min, int max) {
    	Random random = new Random(); // nextInt는 정상적인 경우 최대 값을 포함하지 않기 때문에, 1을 더함. 
    	int no = random.nextInt((max - min) + 1) + min;
    	return no; 
    }
}