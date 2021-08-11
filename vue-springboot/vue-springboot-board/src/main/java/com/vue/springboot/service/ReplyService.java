package com.vue.springboot.service;

import java.util.List;

import com.vue.springboot.domain.ReplyDTO;

public interface ReplyService {

	public int insertreply(ReplyDTO params) throws Exception;
	
	public List<ReplyDTO> fetchReply(ReplyDTO params) throws Exception;
	
	public int deleteReply(ReplyDTO params) throws Exception;
	
	public int editReply(ReplyDTO params) throws Exception;
 }
