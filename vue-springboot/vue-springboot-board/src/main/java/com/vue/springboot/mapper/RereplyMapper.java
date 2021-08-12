package com.vue.springboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.vue.springboot.domain.RereplyDTO;


@Mapper
public interface RereplyMapper {
	
	public int insertrereply(RereplyDTO params) throws Exception;
	
	public List<RereplyDTO> fetchRereply(RereplyDTO params) throws Exception;
	
	public int deleteRereply(RereplyDTO params) throws Exception;
	
	public int editRereply(RereplyDTO params) throws Exception;

}
