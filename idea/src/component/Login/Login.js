import React,{useState} from 'react';
import axiosInstance  from '../../axios';
import { useNavigate } from 'react-router-dom';
import {Form, 
    Col,
    Row,
    Button,
    Container,}from 'react-bootstrap';
import './Login.css'

function Login (){
    const history = useNavigate();
    const initialFormData = Object.freeze({
        email:'',
        password:'',
    });

    const [formData,setFormData]=useState(initialFormData)

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value.trim(),
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`api/auth/signin`,{
                user:
                {email: formData.email,
                password:formData.password,}
        }).then((res)=>{
            localStorage.setItem('token',res.data.token);
            axiosInstance.defaults.headers['Authorization'] = 
              'JWT '+localStorage.getItem('token')
            history.push('/')
        })
    }
    return(

          <div className="Login">
              <h1>LogIn</h1>
            <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" >
              Login
            </Button>
          </Form>
          </Container>
        </div>
)
}

export default Login