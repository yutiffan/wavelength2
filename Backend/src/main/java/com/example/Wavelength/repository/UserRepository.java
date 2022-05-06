package com.example.Wavelength.repository;

import com.example.Wavelength.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {



    //returning User
    @Query("SELECT s FROM User s WHERE s.email =?1")
    Optional<User> findVendorByEmail(String email);

    @Query("SELECT s FROM User s WHERE s.last_name=?1")
    Optional<User> findVendorByName(String name);

//    @Query("SELECT s FROM Vendor s WHERE s.tUserId=?1")
//    Optional<Vendor> findVendorBytUserID(String tUserId);

//    //returning string
//    @Query("SELECT S FROM USER S WHERE ")
//    String findFirstName();
//    //returning boolean
//    @Query("SELECT s FROM User s WHERE s.email =?1")
//    Boolean userEmailExists(String email);
//
//    @Query("SELECT s.ID FROM User s WHERE s.email =?1 ")
//    Long findUserIdByEmail(String email);
}
