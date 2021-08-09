package com.vue.springboot.service;

import java.util.List;

import com.vue.springboot.domain.BoardDTO;

public interface BoardService {

	public int insertBoard(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getBoardList() throws Exception;
	
	public BoardDTO getBoardDetail(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getMyBoard(BoardDTO params) throws Exception;
	
	public int deleteBoard(BoardDTO params) throws Exception;
	
	public BoardDTO getModifyBoard(BoardDTO params) throws Exception;
}
