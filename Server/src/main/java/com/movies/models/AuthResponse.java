package com.movies.models;

public class AuthResponse {
    private String token;
    private User user;
    public AuthResponse(String token, User user) {
        this.token = token;
        this.user = user;
    }   
}
