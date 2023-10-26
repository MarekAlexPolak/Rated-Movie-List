package models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "movies")
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date dateTime;

    private String address;
    private String phone;
    private String email;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Movies() {
    }

    public Movies(String name, String description, Date dateTime, String address, String phone, String email, User user) {
        this.name = name;
        this.description = description;
        this.dateTime = dateTime;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.user = user;
    }

    // Getters and setters
}
