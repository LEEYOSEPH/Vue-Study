package com.vue.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.LikesDTO;
import com.vue.springboot.service.BoardService;
import com.vue.springboot.service.LikesService;

@RestController
@RequestMapping("/api/likes")
public class LikesController {
	
	@Autowired
	LikesService likesService;
	
	@Autowired
	BoardService boardService;
	
	
	/* 좋아요 추가 */
	
	@PostMapping("/insertLikes")
	@ResponseBody
	public LikesDTO insertLikes(@RequestBody LikesDTO params) throws Exception {
		
		System.out.println(params);
		
		int rst = likesService.insertLikes(params);
		
		if(rst > 0) {
			
			int result =  boardService.updateLikesCnt(params);
			System.out.println("결과" + result);
		}
		
		System.out.println(rst);
		
		return params;
	}
	
	/* 좋아요 취소 */
	
	@PutMapping("/updateLikes")
	@ResponseBody
	public void updateLikes(@RequestBody LikesDTO params) throws Exception {
		
		int rst =likesService.updateLikes(params);
		
		if(rst > 0) {
			
			boardService.updateUnLikesCnt(params);
		}
		
	}
	
	/* 좋아요 체크 */
	@PostMapping("/likesCheck")
	@ResponseBody
	public void likesCheck(@RequestBody LikesDTO params) throws Exception {
		
		LikesDTO data = params;
		params = likesService.likesCheck(params);
		
		System.out.println(params + "DB값 확인");
		System.out.println(data+ "이건...??");
		if(params == null) {
			
			int rst = likesService.insertLikes(data);
			if(rst > 0) {
				
				int result =  boardService.updateLikesCnt(data);
				System.out.println("결과" + result);
			}
		}else if(params.getLikes_check() == 0) {
			
			int rst = likesService.updateLikesCheck(data);
			
			if(rst > 0) {
				int result =  boardService.updateLikesCnt(data);
				System.out.println("결과" + result);
			}
			
		}else {
			int rst =likesService.updateLikes(data);
			
			if(rst > 0) {
				
				int result =	boardService.updateUnLikesCnt(data);
				System.out.println("좋아요 취소" + result);
			}
		}
		
	}
}
