package com.vue.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.LikesDTO;
import com.vue.springboot.mapper.LikesMapper;

@Service
public class LikesServiceImpl implements LikesService {
	
	@Autowired
	LikesMapper likesMapper;

	@Override
	public int insertLikes(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		
		int rst = 0;
		
		rst = likesMapper.insertLikes(params);
		
		return rst;
	}

	@Override
	public int updateLikes(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		
		int rst = 0 ;
		
		rst = likesMapper.updateLikes(params);
		return rst;
	}

	@Override
	public LikesDTO likesCheck(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		return likesMapper.likesCheck(params);
	}

	@Override
	public int updateLikesCheck(LikesDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0 ;
		
		rst = likesMapper.updateLikesCheck(params);
		return rst;
	}

}
