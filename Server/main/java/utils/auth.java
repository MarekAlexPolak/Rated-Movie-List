package utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

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
            return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
        } catch (Exception e) {
            System.out.println("Invalid token");
            return null;
        }
    }

    // Sign a token when the user signs up
    public static String signToken(String username, String name, String email, String id, String role) {
        Claims claims = Jwts.claims();
        claims.put("username", username);
        claims.put("name", name);
        claims.put("email", email);
        claims.put("_id", id);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationInMilliseconds))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
}
