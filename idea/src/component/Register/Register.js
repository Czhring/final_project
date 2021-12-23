import React,{useState} from 'react';
import axiosInstance  from '../../axios';
import { useNavigate } from 'react-router-dom';
import {Form, 
    Col,
    Row,
    Button,}from 'react-bootstrap';

function Register (){
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
            .post(`api/auth/signup/`,{
                user:
                {email: formData.email,
                password:formData.password,}
        }).then((res)=>{
            history.push('/');
            console.log(res);
            console.log(res.data);
        })
    }
    return(
        <div>
          <h1></h1>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" name="email" onChange ={handleChange}/>
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" name="password"onChange ={handleChange}/>
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button  variant="dark" type="submit" onClick={handleSubmit}>SignUp</Button>
          </Col>
        </Form.Group>
      </Form>
      </div>
)
}

export default Register