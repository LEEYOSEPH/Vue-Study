package com.vue.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.RereplyDTO;
import com.vue.springboot.service.RereplyService;

@RestController
@RequestMapping("/api/rereply")
public class RereplyController {
	
	@Autowired
	RereplyService rereplyService;
	
	/* 대댓글 등록 */
	@PostMapping("/insertrereply")
	@ResponseBody
	public void insertrereply(@RequestBody RereplyDTO params) throws Exception {
		
		System.out.println(params+"확인");
		int rst = rereplyService.insertrereply(params);
		
		System.out.println(rst+"등록 결과");
	}
	
	/* 대댓글 조회 */
	@PostMapping("/fetchRereply")
	@ResponseBody
	public List<RereplyDTO> fetchRereply(@RequestBody RereplyDTO params) throws Exception {
		
		List<RereplyDTO> rereplyList = rereplyService.fetchRereply(params);
		
		return rereplyList;
	}
	
	/* 대댓글 삭제 */
	@PostMapping("/deleteRereply")
	@ResponseBody
	public void deleteRereply(@RequestBody RereplyDTO params) throws Exception {
		
		int rst = rereplyService.deleteRereply(params);
		System.out.println(rst + "삭제 결과");
	}
	
	/* 대댓글 수정 */
	@PutMapping("/editRereply")
	@ResponseBody
	public void editRereply(@RequestBody RereplyDTO params) throws Exception {
		
		int rst = rereplyService.editRereply(params);
		System.out.println(rst + "수정 결과");
	}
}
