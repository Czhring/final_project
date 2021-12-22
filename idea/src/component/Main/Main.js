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
  const initialForm = Object.freeze({
    title:'',
    content:'',
  })
  const [form,setForm]=useState(initialForm)
  const [ideasList,setIdeasList]=useState([{
    title:'',
    content:''
  }])
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
            .then((response) => response.json())
            .then((data) => setIdeasList(data));
        
      })
    }

const ideaReadList = ideasList.map = (idea=>{
  return (     
  <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>{idea.title}</Card.Title>
  <Card.Text>
    {idea.content}
  </Card.Text>
    <Button variant='dark'>Delete</Button>
</Card.Body>
</Card>) 
})


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
<Button type="submit" onClick={handleSubmit}>ADD</Button>

    </div>

)
}

export default Main