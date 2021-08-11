package com.vue.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.ReplyDTO;
import com.vue.springboot.mapper.BoardMapper;
import com.vue.springboot.mapper.ReplyMapper;

@Service
public class ReplyServiceImpl implements ReplyService {
	
	@Autowired
	ReplyMapper replyMapper;

	@Autowired
	BoardMapper boardMapper;
	
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

	@Override
	public int deleteReply(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		
		rst = replyMapper.deleteReply(params);
		return rst;
	}

	@Override
	public int editReply(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst =0;
		
		rst = replyMapper.editReply(params);
		return rst;
	}

	@Override
	public int updateReplyCnt(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		
		rst = boardMapper.updateReplyCnt(params);
		return rst;
	}

	@Override
	public int deleteReplyCnt(ReplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		
		rst = boardMapper.deleteReplyCnt(params);
		return rst;
	}

}
