package com.vue.springboot.controller;



import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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
	public BoardDTO getBoardDetail(@RequestBody BoardDTO params, HttpServletRequest request,HttpServletResponse response) throws Exception{
		
		Cookie[] cookies = request.getCookies();
		
		Cookie viewCookie = null;
		
		if(cookies != null && cookies.length > 0) {
			for(int i = 0; i< cookies.length; i++) {
				//Cookie의 namedl cookie + params.getBoardNo와 일치하는 쿠키를 viewCookie에 넣어줌
				if(cookies[i].getName().equals("cookie"+params.getBoard_no())) {
					System.out.println("처음 쿠키가 생성한 뒤 들어옴.");
					viewCookie = cookies[i];
					System.out.println(viewCookie);
				}
			}
		}
		if(params != null) {
			if(viewCookie == null) {
				System.out.println("쿠키 없음");
				
				//쿠키 생성(이름, 값)
				Cookie newCookie = new Cookie("cookie"+params.getBoard_no(),"|"+params.getBoard_no()+"|");
				newCookie.setMaxAge(60*30);
				
				response.addCookie(newCookie);
				/* 조회수 증가 */
				int rst = boardService.updateBoardCnt(params);
				if(rst > 0) {
					params = boardService.getBoardDetail(params);
				}
			}else {
				//쿠키값이 있으므로 조회수 증가 하지 않는다
				String value = viewCookie.getValue();
				System.out.println(value);
				params = boardService.getBoardDetail(params);
			}
		}
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
	
	/* 게시글 수정 */
	@PutMapping("/editBoard")
	@ResponseBody
	public void editBoard(@RequestBody BoardDTO params) throws Exception {
		
		int rst = boardService.editBoard(params);
		
		System.out.println(rst);
	}
	
	/* 게시글 높은 조회수 순 */
	@GetMapping("/MostViewedBoard")
	@ResponseBody
	public List<BoardDTO> getMostViewedBoard() throws Exception {
		
		List<BoardDTO> boardList = boardService.getMostViewedBoard();
		
		return  boardList;
	}
	
	/* 게시글 좋아요 순 */
	@GetMapping("/mostLikesBoard")
	@ResponseBody
	public List<BoardDTO> getmostLikesBoard() throws Exception {
		
		List<BoardDTO> boardList = boardService.getmostLikesBoard();
		
		return boardList;
	}
}
