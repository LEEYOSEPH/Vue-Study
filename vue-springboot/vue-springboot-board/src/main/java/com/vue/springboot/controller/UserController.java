package com.vue.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.springboot.domain.UserDTO;
import com.vue.springboot.service.UserService;

@RestController //비동기를 통신을 위한 어노테이션
@RequestMapping("/api/user") //'/api/user'를 포함하는 모든 요청을 받음
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	/*
	 * JoginForm
	 * 
	 * */
	@PostMapping("/joinform")
	@ResponseBody
	public void registerUser(@RequestBody UserDTO params, Model model) throws Exception {
		
			int rst = userService.registerUser(params);
			System.out.println("결과"+ rst);

	}
	
	/*
	 * LoginForm
	 * 
	 * */
	@PostMapping("/loginform")
	@ResponseBody
	public UserDTO loginUser(@RequestBody UserDTO params) throws Exception {
		
		System.out.println(params+"로그인 정보 확인");
		
		UserDTO responseParams = userService.loginUser(params);
		System.out.println(responseParams);
		return responseParams;
		
	}
		
}
	
	


