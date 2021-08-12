package com.vue.springboot.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RereplyDTO {

	private int rereply_no;
	
	private String rereply_content;
	
	private int reply_no;
	
	private int board_no;
	
	private int user_no;
	
	private String user_name;
	
	private Date rereply_createdt;
	
	private Date rereply_updatedt;
}
