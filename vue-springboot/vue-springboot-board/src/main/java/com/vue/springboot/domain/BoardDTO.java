package com.vue.springboot.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardDTO {
	
	private int board_no;
	
	private String board_title;
	
	private String board_content;
	
	private Date board_createDt;
	
	private Date board_updateDt;
	
	private int board_cnt;
	
	private String board_image;
	
	private int user_no;
	
	private int likes_cnt;
	
}
