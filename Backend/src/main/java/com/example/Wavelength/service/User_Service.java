package com.example.Wavelength.service;
import com.example.Wavelength.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Wavelength.model.User;
import java.util.List;
import java.util.Optional;

@Service
public class User_Service {
    private final UserRepository userRepository;

    @Autowired
    public User_Service(UserRepository userRepo){
        this.userRepository = userRepo;
    }

    //getters
    public List<User> getUsers() {
        return userRepository.findAll();
    }

//    public String getUserFirstName() {
//        return userRepository.findFirstName();
//    }

    public void addUsers(User user) {
        Optional<User> userOptional= userRepository.findVendorByEmail(user.getEmail());
        if(userOptional.isPresent())
        {
            throw new IllegalStateException("Email taken");
        }
        System.out.println(user.getEmail());
        userRepository.save(user);
    }

//    public void deleteUsers(String email) {
//        Boolean exist = userRepository.userEmailExists(email);
//        if (!exist)
//        {
//            throw new IllegalStateException("vendor with email" + email + "not found");
//        }
//        else
//        {
//            userRepository.deleteById(userRepository.findUserIdByEmail(email));
//        }
//    }
}