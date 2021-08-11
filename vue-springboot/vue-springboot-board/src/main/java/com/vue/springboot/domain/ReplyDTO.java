package com.vue.springboot.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReplyDTO {

	private int reply_no;
	
	private String reply_content;
	
	private int board_no;
	
	private int user_no;
	
	private String user_name;
	
	private Date reply_createdt;
	
	private Date reply_updatedt;
	
}
