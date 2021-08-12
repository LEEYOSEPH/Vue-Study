package com.vue.springboot.service;

import java.util.List;

import com.vue.springboot.domain.RereplyDTO;

public interface RereplyService {
	
	public int insertrereply(RereplyDTO params) throws Exception;
	
	public List<RereplyDTO> fetchRereply(RereplyDTO params) throws Exception;
	
	public int deleteRereply(RereplyDTO params) throws Exception;
	
	public int editRereply(RereplyDTO parmas) throws Exception;

}
