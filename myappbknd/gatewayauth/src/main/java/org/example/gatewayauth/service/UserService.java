package org.example.gatewayauth.service;


import org.example.gatewayauth.model.Admin;
import org.example.gatewayauth.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private AdminRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Admin save(Admin user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Admin findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}