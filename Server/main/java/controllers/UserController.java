package controllers;

import models.User;
import utils.AuthUtils;
import services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final AuthUtils authUtils;
    private final UserService userService;

    @Autowired
    public UserController(AuthUtils authUtils, UserService userService) {
        this.authUtils = authUtils;
        this.userService = userService;
    }

    /*@GetMapping("/{id}")
    public ResponseEntity<User> getSingleUser(@PathVariable Long id) {
        // Logic to retrieve user from the database based on id
        User foundUser = userService.getUserByIdFromDatabase(id); // Replace with actual logic
        if (foundUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }*/

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody User userInput) {
        try {
            User existingUser = userService.findUserByEmail(userInput.getEmail());
            if (existingUser != null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already taken.");
            }
            User createdUser = userService.addUser(userInput);
            //creates token
            String token = authUtils.signToken(createdUser);
            return ResponseEntity.ok(new AuthResponse(token, createdUser));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginInput) {
        try {
            // Logic to find the user based on username or email
            User foundUser = userService.findUserByUsernameOrEmail(loginInput.getUsername()); 
            if (foundUser == null) {
                return new ResponseEntity<>("Can't find this user", HttpStatus.NOT_FOUND);
            }
            boolean correctPw = foundUser.checkPassword(loginInput.getPassword());
            if (!correctPw) {
                return new ResponseEntity<>("Wrong password!", HttpStatus.UNAUTHORIZED);
            }
            String token = authUtils.signToken(foundUser); // Sign a token for the user
            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updateInput) {
        try {
            // Check if the user input contains a new password
            if (updateInput.getPassword() != null && !updateInput.getPassword().isEmpty()) {
                updateInput.setPassword(updateInput.getPassword());
            }
            // Logic to update the user in the database
            User updatedUser = userService.updateUser(id, updateInput); // Implement the updateUser method in the UserService
            if (updatedUser == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}