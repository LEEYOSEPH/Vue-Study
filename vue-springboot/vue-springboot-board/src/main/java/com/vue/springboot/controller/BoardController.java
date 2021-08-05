package com.vue.springboot.controller;



import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vue.springboot.domain.BoardDTO;
import com.vue.springboot.domain.ImageDTO;


@RestController
@RequestMapping("/api/board")
public class BoardController {
	
	
	
	@PostMapping("/createBoard")
	@ResponseBody
	public BoardDTO createBoard(@RequestBody BoardDTO params) throws Exception {
		
		System.out.println(params.toString());
		
		return params;
	}
	
	@PostMapping("/uploadImage")
	@ResponseBody
	public ImageDTO uploadImage(@RequestParam(value = "img", required = false) MultipartFile file, ImageDTO img, HttpServletRequest request) throws Exception {
		
		System.out.println(file.getOriginalFilename());
		
		String path = request.getRealPath("/resources/static/upload");
		String fileName = file.getOriginalFilename();
		File uploadFile = new File(path+"/"+fileName);
		try {
			file.transferTo(uploadFile);
		} catch (IllegalStateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}catch (IOException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		System.out.println(uploadFile);
		img.setImg_url(path+"//"+fileName);
		System.out.println(img.getImg_url());
		return img;
	}
}
