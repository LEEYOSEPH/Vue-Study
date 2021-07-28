package com.vue.springboot;

import static org.assertj.core.api.Assertions.assertThat;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.annotation.Commit;

import com.vue.springboot.domain.UserDTO;
import com.vue.springboot.service.UserService;

@SpringBootTest
class VueSpringbootBoardApplicationTests {
	@Autowired
	private ApplicationContext context;

	@Autowired
	private SqlSessionFactory sessionFactory;
	
	@Autowired
	private UserService userService;
	

	@Test
	void contextLoads() {
	}

	@Test
	public void testByApplicationContext() {
		try {
			System.out.println("=========================");
			System.out.println(context.getBean("sqlSessionFactory"));
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testBySqlSessionFactory() {
		try {
			System.out.println("=========================");
			System.out.println(sessionFactory.toString());
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test 
	@Commit 
	@DisplayName("생성") 
	void test3() throws Exception {
		UserDTO user = new UserDTO(); 
		user.setUsername("Tom"); 
		int insertCnt = userService.registerUser(user); 
		System.out.println("=========================");
		System.out.println(insertCnt);
		
	}

}
