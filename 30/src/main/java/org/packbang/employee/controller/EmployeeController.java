package org.packbang.employee.controller;

import ch.qos.logback.core.model.Model;
import org.packbang.employee.model.Employee;
import org.packbang.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/")
    public String greet(){
        return "Welcome to the Employee";
    }

    @PostMapping("/insert")
    public void insertEmployee(@RequestBody Employee employee){
        employeeService.insertEmployee(employee);
    }

    @GetMapping("/get/{id}")
    public Employee getEmployeeById(@PathVariable int id){
        return employeeService.getEmployee(id);
    }
    @GetMapping("/getall")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
}
