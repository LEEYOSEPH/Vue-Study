package com.vue.springboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.ReplyDTO;

@Mapper
public interface ReplyMapper {
	
	public int insertreply(ReplyDTO params);
	
	public List<ReplyDTO> fetchReply(ReplyDTO params);
	
	public int deleteReply(ReplyDTO params);
	
	public int editReply(ReplyDTO params);
	
	

}
