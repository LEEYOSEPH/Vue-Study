package com.vue.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.springboot.domain.RereplyDTO;
import com.vue.springboot.mapper.RereplyMapper;

@Service
public class RereplyServiceImpl implements RereplyService {

	@Autowired
	RereplyMapper rereplyMapper;
	
	@Override
	public int insertrereply(RereplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0;
		
		rst = rereplyMapper.insertrereply(params);
		return rst;
	}

	@Override
	public List<RereplyDTO> fetchRereply(RereplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		return rereplyMapper.fetchRereply(params);
	}

	@Override
	public int deleteRereply(RereplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		int rst = 0 ;
		rst = rereplyMapper.deleteRereply(params);
		
		return  rst;
	}

	@Override
	public int editRereply(RereplyDTO params) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(params);
		int rst = 0;
		rst = rereplyMapper.editRereply(params);
		return rst;
	}

}
