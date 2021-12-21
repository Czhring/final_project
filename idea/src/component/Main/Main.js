import './Main.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import 
{Form,
  Button,
  Card}
   from 'react-bootstrap'
   import { useNavigate } from 'react-router-dom';


  
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';


function Main (){
  const history = useNavigate();
  const initialForm = Object.freeze({
    title:'',
    content:'',
  })
  const [form,setForm]=useState(initialForm)

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value.trim(),
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)

    axiosInstance
      .post(`ideas`,{
        title:form.title,
        content:form.content
      })
      .then((res)=>{
        localStorage.setItem('token',res.data.token);
            axiosInstance.defaults.headers['Authorization'] = 
              'JWT '+localStorage.getItem('token')
        fetch("http://localhost:8000/ideas/")
      })
    }
return(
    
  <div>
      <>
    <FloatingLabel controlId="floatingTextarea" label="title" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" onChange={handleChange}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Contents">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      onChange={handleChange}
    />
  </FloatingLabel>
</>
<Button type="submit" onClick={handleSubmit}>submit</Button>
    <ul>
      <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Idea Title</Card.Title>
    <Card.Text>
      Inot anything that come up in your mind
    </Card.Text>
      <Button variant='dark'>Delete</Button>
  </Card.Body>
</Card>
    </ul>
    </div>

)
}

export default Main