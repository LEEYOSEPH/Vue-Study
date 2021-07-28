package com.vue.springboot.mapper;



import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.UserDTO;

@Mapper
public interface UserMapper {
	
	public int registerUser(UserDTO params) throws Exception;
	
}
