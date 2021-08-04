package com.vue.springboot.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.BoardDTO;

@RestController
@RequestMapping("/api/board")
public class BoardController {
	
	
	
	@PostMapping("/createBoard")
	@ResponseBody
	public BoardDTO createBoard(@RequestBody BoardDTO params) throws Exception {
		
		System.out.println(params);
		
		return params;
	}

}
