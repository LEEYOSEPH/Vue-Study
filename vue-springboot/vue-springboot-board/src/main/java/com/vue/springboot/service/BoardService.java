package com.vue.springboot.service;

import java.util.List;

import com.vue.springboot.domain.BoardDTO;

public interface BoardService {

	public int insertBoard(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getBoardList() throws Exception;
}
