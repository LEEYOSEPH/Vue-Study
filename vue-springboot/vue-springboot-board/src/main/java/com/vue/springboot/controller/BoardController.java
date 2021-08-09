package com.vue.springboot.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		
		return  boardList;
	}
	
	/* 게시물 상세 조회 */
	@PostMapping("/getBoardDetail")
	@ResponseBody
	public BoardDTO getBoardDetail(@RequestBody BoardDTO params) throws Exception{
		
		params = boardService.getBoardDetail(params);
		
		
		return params;
	}
	
	/* 나의 게시물 조회 */
	@PostMapping("/getMyBoard")
	@ResponseBody
	public List<BoardDTO> getMyBoard(@RequestBody BoardDTO params) throws Exception {
		
		
		List<BoardDTO> boardList = boardService.getMyBoard(params);
		
		return boardList;
	}

	/* 게시글 삭제 */
	@PostMapping("/deleteBoard")
	@ResponseBody
	public void deleteBoard( @RequestBody BoardDTO params) throws Exception{
		
		int rst = boardService.deleteBoard(params);
		
		System.out.println(rst);
	}

	/* 게시글 수정 페이지 */
	@PostMapping("/modifyBoard")
	@ResponseBody
	public BoardDTO modifyBoard (@RequestBody BoardDTO params) throws Exception {
		
		System.out.println(params);
		
		params = boardService.getModifyBoard(params);
		
		return params;
	}
}
