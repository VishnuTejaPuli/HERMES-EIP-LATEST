package org.example.gatewayauth.model;


import lombok.Data;

@Data
public class AuthenticationRequest {

    private String username;
    private String password;

    // getters and setters
}
