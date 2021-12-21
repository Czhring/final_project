import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'

function Login(){

  const [userName,setUserName] = useState('')
  const [passWord, setPassWord]= useState('')

  // const [credential,setCredential] = useState( username:'', password:'');

  const login = (event) =>{
    console.log('login')
  }
return(
    <div>
  <Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" name="username" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" name="password"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={login} type="submit">Log in</Button>
      <Button type="submit">Sign Up</Button>
    </Col>
  </Form.Group>
</Form>
</div>
)
}
export default Login