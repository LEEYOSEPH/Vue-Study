package com.vue.springboot.domain;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class UserDTO {
	
	/** 회원 번호 */
	private String user_no;
	
	/** 아이디 */
	private String user_id;
	
	/** 비밀번호 */
	private String user_pw;
	
	/** 닉네임 */
	private String user_name;
	
}
