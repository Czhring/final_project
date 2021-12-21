import './Main.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form'
import Button from '@restart/ui/esm/Button';
import Card from 'react-bootstrap/Card'


function Main (){

    return(
    
    <div>
       <>
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>
<Button type="submit">submit</Button>


));
    </div>
    
)
}

export default Main