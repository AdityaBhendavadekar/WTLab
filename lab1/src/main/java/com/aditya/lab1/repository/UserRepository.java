package com.aditya.lab1.repository;

import org.springframework.data.jpa.repository.JpaRepository
        ;
import com.aditya.lab1.model.StudInfo;

public interface UserRepository extends JpaRepository<StudInfo, Integer> {
}