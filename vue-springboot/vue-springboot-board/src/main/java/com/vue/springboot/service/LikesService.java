package com.vue.springboot.service;

import com.vue.springboot.domain.LikesDTO;

public interface LikesService {

	public int insertLikes(LikesDTO params) throws Exception;
	
	public int updateLikes(LikesDTO params) throws Exception;
	
	public int updateLikesCheck(LikesDTO params) throws Exception;
	
	public LikesDTO likesCheck(LikesDTO params) throws Exception;
}
