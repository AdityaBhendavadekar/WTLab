package com.aditya.lab1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class StudInfo {

    @Id
    private int id;
    private String name;
    private String rollno;
    private String marks;
}