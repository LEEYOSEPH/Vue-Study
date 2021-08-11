package com.vue.springboot.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.ReplyDTO;

@RestController
@RequestMapping("/api/reply")
public class ReplyController {
	
	@PostMapping("/insertreply")
	@ResponseBody
	public void insertreply(@RequestBody ReplyDTO params) throws Exception {
		System.out.println(params);
	}

}
