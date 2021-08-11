package com.vue.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.ReplyDTO;
import com.vue.springboot.mapper.ReplyMapper;

@Service
public class ReplyServiceImpl implements ReplyService {
	
	@Autowired
	ReplyMapper replyMapper;

	@Override
	public int insertreply(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		
		int rst = 0;
		
		rst = replyMapper.insertreply(params);
		return rst;
	}

	@Override
	public List<ReplyDTO> fetchReply(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		return replyMapper.fetchReply(params);
	}

}
