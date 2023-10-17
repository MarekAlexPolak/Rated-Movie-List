import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 


const Login = () => {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        //const [addUser] = useMutation(ADD_USER);
        const navigate = useNavigate(); 


        const handleUserSignup = async (event) => {
            event.preventDefault();
            const usernameInput = username;
            const passwordInput = password;

                try {
                    const { data } = await addUser({
                    variables: {
                        userInput: {
                        username: usernameInput,
                        password: passwordInput,
                        },
                    },
                    });
                    console.log("");
                    //Auth.login(data.addUser.token);

                    // Redirect to the home page after successful signup
                    navigate("/"); // Use navigate to redirect
                } catch (err) {
                    console.error(err);
                    // add signup error message later
                }
        };
    return (
        <div className="signup-main">
            <h2>Login</h2>
            <Form onSubmit={handleUserSignup}>
                <Form.Group controlId="username">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                </Form.Group>
                <div className="signup-button">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div> 
            </Form>
        </div>
    );
}

export default Login;