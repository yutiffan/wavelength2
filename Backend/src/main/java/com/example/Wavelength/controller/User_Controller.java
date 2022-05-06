package com.example.Wavelength.controller;
import com.example.Wavelength.service.User_Service;
import com.example.Wavelength.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Wavelength.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api/v1/Users")
public class User_Controller {

    private final User_Service userService;

    @Autowired
    public User_Controller (User_Service userservice){
        this.userService= userservice;
    }

    @Autowired
    UserRepository userrepository;


    @GetMapping
    public List<User> getUsers() { return userService.getUsers();}

//    @GetMapping(value = "/users/{id}")
//    public User getUser(@PathVariable("id") String id) {
//        return userService.
//    }

//    @PostMapping
//    public void postUser(@RequestBody(required = false) User user) {
//        userService.addUsers(user);
//    }

//    @DeleteMapping(path = "{email}")
//    public void deleteUser(@PathVariable("email") String email) {
//        userService.deleteUsers(email);
//    }

    @PostMapping("/users")
    public void createUser(@RequestBody User user){
        userrepository.save(new User(user.getFirst_name(), user.getLast_name(),
                user.getGender(), user.getPhonenum(), user.getEmail(), user.getAge()) );

    }
}
