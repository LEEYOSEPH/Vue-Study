package com.vue.springboot.domain;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class UserDTO {
	
	/** 회원 번호 */
	private String idx;
	
	/** 아이디 */
	private String username;
	
	/** 비밀번호 */
	private String password;
	
	/** 닉네임 */
	private String nickname;
	
}
