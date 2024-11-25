package com.aditya.lab1.service;

import com.aditya.lab1.model.StudInfo;
import com.aditya.lab1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    UserRepository userRepository;

    public void insertStudent(StudInfo stud){
        userRepository.save(stud);
    }

    public List<StudInfo> listStudents(){
        return userRepository.findAll();
    }
}
