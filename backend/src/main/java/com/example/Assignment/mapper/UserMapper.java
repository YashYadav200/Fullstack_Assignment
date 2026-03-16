package com.example.Assignment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.Assignment.dto.RegisterReqDto;
import com.example.Assignment.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
@Mapping(target = "id" , ignore = true)
@Mapping(target = "role" , ignore = true)
User toEntity(RegisterReqDto dto);
}
