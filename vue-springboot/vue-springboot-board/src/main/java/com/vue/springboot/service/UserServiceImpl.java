package com.vue.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.UserDTO;
import com.vue.springboot.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public int registerUser(UserDTO params) throws Exception {
		int rst = 0;
		System.out.println(params);
		rst = userMapper.registerUser(params);

		return rst;
	}

}
