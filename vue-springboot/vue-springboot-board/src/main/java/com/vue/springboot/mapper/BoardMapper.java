package com.vue.springboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.BoardDTO;

@Mapper
public interface BoardMapper {
	
	public int insertBoard(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getBoardList() throws Exception;
	
	public BoardDTO getBoardDetail(BoardDTO params) throws Exception;

}
