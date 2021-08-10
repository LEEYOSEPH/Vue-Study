package com.vue.springboot.service;

import java.util.List;

import com.vue.springboot.domain.BoardDTO;
import com.vue.springboot.domain.LikesDTO;

public interface BoardService {

	public int insertBoard(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getBoardList() throws Exception;
	
	public BoardDTO getBoardDetail(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getMyBoard(BoardDTO params) throws Exception;
	
	public int deleteBoard(BoardDTO params) throws Exception;
	
	public BoardDTO getModifyBoard(BoardDTO params) throws Exception;
	
	public int editBoard(BoardDTO params) throws Exception;
	
	public int updateBoardCnt(BoardDTO params) throws Exception;
	
	public List<BoardDTO> getMostViewedBoard() throws Exception;
	
	public int updateLikesCnt(LikesDTO params) throws Exception;
	
	public int updateUnLikesCnt(LikesDTO params) throws Exception;
}
