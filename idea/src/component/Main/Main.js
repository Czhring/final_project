import './Main.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import 
{Form,
  Button,
  Card}
   from 'react-bootstrap'
   import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"


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
    fetch("http://localhost:8000/ideas/",{
      method:'POST',
      body: JSON.stringify(
        {title:form.title,
        content:form.content}),
      headers:{
        'Content-Type':'application/json',
        "Authorization":"Token "+localStorage.token
      }
    })
      .then((res)=>{
      fetch("http://localhost:8000/ideas/",{
      headers:{
      "Authorization":"Token "+localStorage.token
    }})
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setIdeasList(data)});
        console.log(res)
      })
    }
const makeIdeaListCall = () =>{
      fetch("http://localhost:8000/ideas/",{
        headers:{
        "Authorization":"Token "+localStorage.token
      }})
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                setIdeasList(data)});
  }
  useEffect(()=> {
    console.log("hi")
      makeIdeaListCall()
  },[])

  console.log(ideasList)

  // let {id} =useParams();
  // console.log(id)
  // const handleDelete = (event)=>{
  //   event.preventDefault();
  //   fetch(`http://localhost:8000/ideas/${id}`,{
  //     method:'Delete',
  //     headers:{
  //       'Content-Type':'application/json',
  //       "Authorization":"Token "+localStorage.token
  //     }
  //   })
  // }
const ideaReadList = ideasList.map(idea=>{
  return(
    <div>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{idea.title}</Card.Title>
    <Card.Text>
    {idea.content}
    </Card.Text>
    <Button  variant="dark">Delete</Button>
  </Card.Body>
</Card>
    </div>  
  )  
})
return(
    
  <div>
      <>
    <FloatingLabel controlId="floatingTextarea" label="title" className="mb-3">
    <Form.Control as="textarea" name="title"placeholder="Leave a comment here" onChange={handleChange}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Contents">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      name="content"
      onChange={handleChange}
    />
  </FloatingLabel>
</>
<Button variant="dark" type="submit" onClick={handleSubmit}>ADD</Button>
<ul>
{ideaReadList}  
</ul>

  </div>

)
}

export default Main