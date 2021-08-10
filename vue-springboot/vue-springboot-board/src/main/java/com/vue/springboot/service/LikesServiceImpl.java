package com.vue.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.mapper.LikesMapper;

@Service
public class LikesServiceImpl implements LikesService {
	
	@Autowired
	LikesMapper likesMapper;

}
