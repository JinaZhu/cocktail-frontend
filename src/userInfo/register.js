import React, { useState, useEffect } from 'react';
import { Form, 
         Button, 
         FormText,
         FormGroup,
         FormFeedback, 
         Label, 
         Input, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter } from 'reactstrap';
import validateRegister from './ValidateRegister';

const Register = ({isOpen, toggle, setUser}) => {

  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }

  // submitting state added to avoid form submittal on refresh
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerForm, setRegisterForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>


  useEffect(() => {
    const submitForm = async () => {
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
    }
    // check for errors in form and submitting state before running fetch
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
      console.log('successfully registered')
    }
  }, [errors]);


  const handleChange = (evt) => setRegisterForm({
    ...registerForm,
    [evt.target.name]: evt.target.value
  });


  const handleSubmit = async (evt) => {
    evt.preventDefault();
      try {
        setErrors(validateRegister(registerForm))
        setIsSubmitting(true);
      } catch (error) {
          console.log(`Error: ${error}`)
      } 
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} close={closeBtn}>Register</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="FirstName">First Name:</Label>
            {!errors.fname  
              ? (<Input type="text" 
                        name="fname" 
                        value={registerForm.fname} 
                        onChange={handleChange}
                        id="FirstName"/>) 
              : (<>
                 <Input invalid 
                        name="fname"
                        type="text"
                        value={registerForm.fname}
                        onChange={handleChange}
                        id="FirstName"/>
                 <FormFeedback>{errors.fname}</FormFeedback>
                 </>)
            }
          </FormGroup>
          <FormGroup>
            <Label for="LastName">Last Name:</Label>
            {!errors.lname  
              ? (<Input type="text" 
                        name="lname" 
                        value={registerForm.lname}
                        onChange={handleChange}
                        id="LastName"/>) 
              : (<>
                 <Input invalid 
                        name="lname"
                        type="text"
                        value={registerForm.lname}
                        onChange={handleChange}
                        id="LastName"/>
                 <FormFeedback>{errors.lname}</FormFeedback>
                 </>)
            }
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email:</Label>
            {!errors.email
              ? (<Input type="email"
                        name="email" 
                        value={registerForm.email}
                        onChange={handleChange}
                        id="Email" 
                        placeholder="user@email.com"/>)
              : (<>
                 <Input invalid 
                        name="email" 
                        type="email"
                        value={registerForm.email}
                        onChange={handleChange}
                        id="Email"
                        placeholder="user@email.com"/>
                 <FormFeedback>{errors.email}</FormFeedback>
                 </>) 
            }
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password:</Label>
            {!errors.password  
              ? (<>
                 <Input type="password" 
                        name="password" 
                        value={registerForm.password}
                        onChange={handleChange}
                        id="Password" 
                        placeholder="********"/>
                 <FormText>Password must be 8 or more characters</FormText>
                 </>)
              : (<>
                 <Input invalid 
                        type="password" 
                        name="password" 
                        value={registerForm.password}
                        onChange={handleChange}
                        id="Password"
                        placeholder="********"/>
                 <FormFeedback>{errors.password}</FormFeedback>
                 </>)
            }
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
