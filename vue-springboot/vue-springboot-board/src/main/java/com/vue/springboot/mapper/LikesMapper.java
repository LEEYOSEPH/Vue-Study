package com.vue.springboot.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.LikesDTO;

@Mapper
public interface LikesMapper {

	public int insertLikes(LikesDTO params);
	
	public int updateLikes(LikesDTO params);
	
	public int updateLikesCheck(LikesDTO params);
	
	public LikesDTO likesCheck(LikesDTO params);
}
