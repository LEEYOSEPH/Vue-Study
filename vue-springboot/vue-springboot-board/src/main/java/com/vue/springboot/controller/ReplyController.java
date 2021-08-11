package com.vue.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.ReplyDTO;
import com.vue.springboot.service.ReplyService;

@RestController
@RequestMapping("/api/reply")
public class ReplyController {
	
	@Autowired
	ReplyService replyService;
	
	
	/* 댓글 등록 */
	
	@PostMapping("/insertreply")
	@ResponseBody
	public void insertreply(@RequestBody ReplyDTO params) throws Exception {
		
		int rst = replyService.insertreply(params);
		
		if(rst > 0) {
			int result = replyService.updateReplyCnt(params);
			System.out.println("등록결과"+result);
		}
		
	}
	
	/* 댓글 전체 조회 */
	@PostMapping("/fetchReply")
	@ResponseBody
	public List<ReplyDTO> fetchReply(@RequestBody ReplyDTO params) throws Exception {
		
		List<ReplyDTO> replyList = replyService.fetchReply(params);
		
		
		return replyList;
	}
	
	/* 댓글 삭제 */
	@PostMapping("/deleteReply")
	@ResponseBody
	public void deleteReply(@RequestBody ReplyDTO params) throws Exception {
		
		int rst = replyService.deleteReply(params);
		
		if(rst > 0) {
			System.out.println(params);
			int result = replyService.deleteReplyCnt(params);
			System.out.println("삭제 결과"+result);
		}
		
		
	}
	
	/* 게시글 수정 */
	@PutMapping("/editReply")
	@ResponseBody
	public void editReply(@RequestBody ReplyDTO params) throws Exception {
		System.out.println(params);
		
		int rst = replyService.editReply(params);
		
		System.out.println("수정 결좌" + rst);
	}

}
