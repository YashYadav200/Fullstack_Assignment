package com.example.Assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Assignment.dto.*;
import com.example.Assignment.service.AuthService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterReqDto dto){

        return authService.register(dto);
    }

    @PostMapping("/login")
    public AuthRespDto login(@RequestBody LoginReqDto dto){

        return authService.login(dto);
    }
}