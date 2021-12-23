import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "./Login.css";
import { Redirect } from "react-router-dom";
function Login() {
  const history = useNavigate();
  const initialLoginData = Object.freeze({
    email: "",
    password: "",
  });

  const [LoginData, setLoginData] = useState(initialLoginData);

  const handleChange = (e) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LoginData);

    axiosInstance
      .post(`api/auth/signin/`, {
        user: { email: LoginData.email, password: LoginData.password },
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.user.token);
        axiosInstance.defaults.headers.common["Authorization"] =
          "Token " + localStorage.getItem("token");
        this.props.history.push('/main');
      });
  };
  return (
    <div className="login-wrapper">
      <h1>LogIn</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" name="email"onChange={handleChange} />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password"onChange={handleChange} />
          </Form.Group>
          <Button className="login-button"block size="lg" type="submit" variant="dark">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
