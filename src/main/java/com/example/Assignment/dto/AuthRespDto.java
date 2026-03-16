package com.example.Assignment.dto;

import com.example.Assignment.enums.RoleType;

public class AuthRespDto {

    private String token;
    private String role;

    public AuthRespDto(String token, RoleType role) {
        this.token = token;
        this.role = role.toString();
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}