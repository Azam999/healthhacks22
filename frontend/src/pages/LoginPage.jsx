import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleLogin() {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    res.data.accessToken && localStorage.setItem("token", res.data.accessToken);
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
