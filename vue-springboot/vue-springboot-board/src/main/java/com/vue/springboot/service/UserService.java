package com.vue.springboot.service;

import com.vue.springboot.domain.UserDTO;

public interface UserService {
	
	public int registerUser(UserDTO params) throws Exception;
	
	public UserDTO loginUser(UserDTO params) throws Exception;

}
