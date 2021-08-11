package com.vue.springboot.domain;

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
}
