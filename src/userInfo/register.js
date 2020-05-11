import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

const Register = () => {

    const initialState = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }

    const [registerForm, setRegisterForm] = useState(initialState);

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
    
          } catch (error) {
              console.log(`Error: ${error}`)
          } 
        // resets form after user submits
        setRegisterForm({...initialState})
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="FirstName">First Name:</Label>
                <Input type="text" 
                       name="fname" 
                       value={registerForm.fname} 
                       onChange={handleChange}
                       id="FirstName"/>
            </FormGroup>

            <FormGroup>
                <Label for="LastName">Last Name:</Label>
                <Input type="text" 
                       name="lname" 
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
                       value={registerForm.password}
                       onChange={handleChange}
                       id="Password" 
                       placeholder="********"/>
            </FormGroup>

            <Button>Submit</Button>
        </form>
    )
}

export default Register;
