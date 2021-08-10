package com.vue.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.service.LikesService;

@RestController
@RequestMapping("/api/likes")
public class LikesController {
	
	@Autowired
	LikesService likesService;
	
	
	

}
