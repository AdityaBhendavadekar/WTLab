package org.packbang.employee.service;

import org.packbang.employee.model.Employee;
import org.packbang.employee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    UserRepository userRepository;

    public void insertEmployee(Employee employee) {
        userRepository.save(employee);
    }

    public Employee getEmployee(int id) {
        Optional<Employee> oemployee = userRepository.findById(id);
        if(oemployee.isPresent()) {
            Employee emp = oemployee.get();
            return emp;
        }
        return null;
    }
    public List<Employee> getAllEmployees() {
        return userRepository.findAll();
    }
}
