package com.vue.springboot.service;

import com.vue.springboot.domain.BoardDTO;

public interface BoardService {

	public int insertBoard(BoardDTO params) throws Exception;
}
