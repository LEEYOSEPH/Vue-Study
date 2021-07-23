package com.vue.springboot.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
	
	//아이디
	private String id;
	
	//비밀번호
	private String password;
	
	//닉네임
	private String nicknmae;
}
