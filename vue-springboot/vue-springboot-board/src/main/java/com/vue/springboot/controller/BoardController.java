package com.vue.springboot.controller;



import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vue.springboot.domain.BoardDTO;
import com.vue.springboot.domain.ImageDTO;


@RestController
@RequestMapping("/api/board")
public class BoardController {
	
	
	
	@PostMapping("/createBoard")
	@ResponseBody
	public BoardDTO createBoard(@RequestBody BoardDTO params) throws Exception {
		
		System.out.println(params.toString());
		
		return params;
	}
	
	
}
