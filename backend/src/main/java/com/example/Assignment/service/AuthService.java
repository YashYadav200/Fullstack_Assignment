package com.example.Assignment.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Assignment.dto.AuthRespDto;
import com.example.Assignment.dto.LoginReqDto;
import com.example.Assignment.dto.RegisterReqDto;
import com.example.Assignment.entity.User;
import com.example.Assignment.enums.RoleType;
import com.example.Assignment.mapper.UserMapper;
import com.example.Assignment.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(RegisterReqDto dto) {

        Optional<User> existingUser = userRepository.findByEmail(dto.getEmail());

        if (existingUser.isPresent()) {
            return "Email already registered";
        }

        User user = userMapper.toEntity(dto);

        user.setPassword(passwordEncoder.encode(dto.getPassword()));

       
        user.setRole(dto.getRole());

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public AuthRespDto login(LoginReqDto dto) {

        Optional<User> userOptional = userRepository.findByEmail(dto.getEmail());

        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // For now return simple response
        return new AuthRespDto("Login Successful", user.getRole());
    }
}