package com.aditya.lab1.controller;

import com.aditya.lab1.model.StudInfo;
import com.aditya.lab1.repository.UserRepository;
import com.aditya.lab1.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/")
    public String greet(){
        return "Welcome";
    }

    @PostMapping("/insert")
    public void insertStudent(@RequestBody StudInfo studInfo){
        studentService.insertStudent(studInfo);
    }

    @PostMapping("/list")
    public List<StudInfo> getStudents(){
        return studentService.listStudents();
    }

}
