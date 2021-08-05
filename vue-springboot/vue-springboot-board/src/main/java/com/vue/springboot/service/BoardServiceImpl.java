package com.vue.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.BoardDTO;
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

}
