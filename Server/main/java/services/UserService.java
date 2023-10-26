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

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User user) {
        // You can perform additional logic here, such as validation before saving
        return userRepository.save(user);
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User addBookToUserSavedBooks(Long userId, Object book) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            // Logic to add the book to the user's savedBooks
            // For example: user.getSavedBooks().add(book);
            // Then save the updated user
            // user = userRepository.save(user);
        }
        return user;
    }

    public User removeBookFromUserSavedBooks(Long userId, Long bookId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            // Logic to remove the book from the user's savedBooks
            // For example: user.getSavedBooks().removeIf(book -> book.getId().equals(bookId));
            // Then save the updated user
            // user = userRepository.save(user);
        }
        return user;
    }
}


