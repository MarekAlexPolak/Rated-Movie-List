package com.movies.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

public class AuthUtils {

    private static final String secret = "mysecretsshhhhh";
    private static final long expirationInMilliseconds = 7200000; // 2 hours

    // Auth middleware to check and verify the token
    public static Claims authMiddleware(String token) {
        try {
            if (token != null && token.startsWith("Bearer ")) {
                token = token.substring(7); // Extract the token without 'Bearer '
            }
            Jws<Claims> parsedToken = Jwts.parser()
                    .setSigningKey(Keys.hmacShaKeyFor(secret.getBytes()))
                    .build()
                    .parseClaimsJws(token);
            return parsedToken.getPayload();
        } catch (Exception e) {
            System.out.println("Invalid token");
            return null;
        }
    }

    // Sign a token when the user signs up
    public static String signToken(String username, String email, String id) {
        return Jwts.builder()
                .claim("username", username)
                .claim("email", email)
                .claim("_id", id)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationInMilliseconds))
                .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
                .compact();
    }
}