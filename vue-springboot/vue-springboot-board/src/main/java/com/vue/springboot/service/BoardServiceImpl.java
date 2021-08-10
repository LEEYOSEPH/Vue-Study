package com.vue.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.BoardDTO;
import com.vue.springboot.domain.LikesDTO;
import com.vue.springboot.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;
	
	@Override
	public int insertBoard(BoardDTO params) throws Exception {
		
		int rst = 0;
		rst = boardMapper.insertBoard(params);
		
		return rst;
	}

	@Override
	public List<BoardDTO> getBoardList() throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getBoardList();
	}

	@Override
	public BoardDTO getBoardDetail(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getBoardDetail(params);
	}

	@Override
	public List<BoardDTO> getMyBoard(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getMyBoard(params);
	}

	@Override
	public int deleteBoard(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		rst = boardMapper.deleteBoard(params);
		
		return rst;
	}

	@Override
	public BoardDTO getModifyBoard(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getModifyBoard(params);
	}

	@Override
	public int editBoard(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		
		int rst = 0;
		rst = boardMapper.editBoard(params);
		return rst;
	}

	@Override
	public int updateBoardCnt(BoardDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0 ;
		
		rst = boardMapper.updateBoardCnt(params);
		return rst;
	}

	@Override
	public List<BoardDTO> getMostViewedBoard() throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getMostViewedBoard();
	}

	@Override
	public int updateLikesCnt(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0 ;
		
		rst = boardMapper.updateLikesCnt(params);
		return rst;
	}

	@Override
	public int updateUnLikesCnt(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		
		rst = boardMapper.updateUnLikesCnt(params);
		return rst;
	}

	@Override
	public List<BoardDTO> getmostLikesBoard() throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.getmostLikesBoard();
	}

}
