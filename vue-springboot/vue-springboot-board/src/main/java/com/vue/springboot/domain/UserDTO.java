package com.vue.springboot.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
	
	//아이디
	private String username;
	
	//비밀번호
	private String password;
	
	//닉네임
	private String nickname;
}
