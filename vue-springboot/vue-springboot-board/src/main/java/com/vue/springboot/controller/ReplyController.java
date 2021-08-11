package com.vue.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
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
		System.out.println(params);
		
		replyService.insertreply(params);
	}
	
	/* 댓글 전체 조회 */
	@PostMapping("/fetchReply")
	@ResponseBody
	public List<ReplyDTO> fetchReply(@RequestBody ReplyDTO params) throws Exception {
		
		List<ReplyDTO> replyList = replyService.fetchReply(params);
		
		System.out.println(replyList);
		
		return replyList;
	}

}
