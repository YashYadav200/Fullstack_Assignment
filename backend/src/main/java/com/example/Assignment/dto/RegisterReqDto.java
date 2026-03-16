package com.example.Assignment.dto;

import com.example.Assignment.enums.RoleType;

import lombok.Data;

@Data
public class RegisterReqDto {
	private String name;
	private String email;
	private String password;
	private RoleType role;
	 
}
