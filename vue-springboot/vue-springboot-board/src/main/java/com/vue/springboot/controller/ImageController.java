package com.vue.springboot.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vue.springboot.domain.ImageDTO;

@RestController
@RequestMapping("/api/image")
public class ImageController {

	
	@PostMapping("/uploadImage")
	@ResponseBody
	public ImageDTO uploadImage(@RequestParam(value = "img", required = false) MultipartFile file, ImageDTO img, HttpServletRequest request) throws Exception {
		
		
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
		String pathUrl = path+"/"+fileName;
		img.setImg_url(pathUrl);
		System.out.println(img.getImg_url());
		return img;
	}
}
