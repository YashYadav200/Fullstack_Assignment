package com.example.Assignment.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Assignment.entity.Role;
import com.example.Assignment.enums.RoleType;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleType  name);

}