package com.vue.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.UserDTO;
import com.vue.springboot.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	/* 회원가입 */
	@Override
	public int registerUser(UserDTO params) throws Exception {
		int rst = 0;
		rst = userMapper.registerUser(params);

		return rst;
	}
	
	/* 로그인 */
	@Override
	public UserDTO loginUser(UserDTO params) throws Exception {
		
		return userMapper.loginUser(params);
	}

}
