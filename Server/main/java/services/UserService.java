package services;

import models.User;
import repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) {
        // Save the user to the database
        User createdUser = userRepository.save(user);

        // Generate the token using the created user
        //String token = authUtils.signToken(createdUser);

        return createdUser;
    }
    
    public User updateUser (User updateInput){
        User updatedUser = userRepository.save(updateInput);
        return updatedUser;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }


    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}


