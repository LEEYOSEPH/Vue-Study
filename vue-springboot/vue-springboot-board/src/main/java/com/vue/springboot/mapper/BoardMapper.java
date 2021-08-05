package com.vue.springboot.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.BoardDTO;

@Mapper
public interface BoardMapper {
	
	public int insertBoard(BoardDTO params) throws Exception;

}
