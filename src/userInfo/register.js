import React, { useState } from 'react';
import { Form, 
         Button, 
         FormGroup, 
         Label, 
         Input, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter } from 'reactstrap';


const Register = ({isOpen, toggle, setUser}) => {

  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }

  const [registerForm, setRegisterForm] = useState(initialState);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>

  const handleChange = (evt) => setRegisterForm({
    ...registerForm,
    [evt.target.name]: evt.target.value
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerForm)
          });
        const jsonResponse = await response.json();
        alert(jsonResponse.message)
        // close modal once registration is successful
        if (jsonResponse.userName) {
          toggle(toggle)
          setUser(true);
        }
      } catch (error) {
          console.log(`Error: ${error}`)
      } 
      // resets form after user submits if unsuccessful
      setRegisterForm({...initialState})
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} close={closeBtn}>Register</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="FirstName">First Name:</Label>
            <Input type="text" 
                   name="fname" 
                   required="required"
                   value={registerForm.fname} 
                   onChange={handleChange}
                   id="FirstName"/>
          </FormGroup>

          <FormGroup>
            <Label for="LastName">Last Name:</Label>
            <Input type="text" 
                   name="lname" 
                   required
                   value={registerForm.lname}
                   onChange={handleChange}
                   id="LastName"/>
          </FormGroup>

          <FormGroup>
            <Label for="Email">Email:</Label>
            <Input type="email"
                   name="email" 
                   value={registerForm.email}
                   onChange={handleChange}
                   id="Email" 
                   placeholder="user@email.com"/>
          </FormGroup>

          <FormGroup>
            <Label for="Password">Password:</Label>
            <Input type="password" 
                   name="password" 
                   required="required"
                   value={registerForm.password}
                   onChange={handleChange}
                   id="Password" 
                   placeholder="********"/>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>Submit</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default Register;
