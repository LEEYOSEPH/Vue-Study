package com.vue.springboot.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.BoardDTO;
import com.vue.springboot.service.BoardService;


@RestController
@RequestMapping("/api/board")
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	
	/* 게시글 생성 */
	
	@PostMapping("/createBoard")
	@ResponseBody
	public void createBoard(@RequestBody BoardDTO params) throws Exception {
		
		System.out.println(params.getUser_no());
		
		int rst = boardService.insertBoard(params);
		
		System.out.println("결과" + rst);
		
	}
	
	/* 전체 게시글 조회 */
	@GetMapping("/getBoard")
	@ResponseBody
	public List<BoardDTO> getBoard() throws Exception {
		
		List<BoardDTO> boardList = boardService.getBoardList();
		System.out.println("들어오나?" + boardList);
		
		return  boardList;
	}
	
	
}
