package com.vue.springboot.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LikesDTO {
	
	private int likes_no;
	
	private int board_no;
	
	private int user_no;
	
	private int likes_check;

}
