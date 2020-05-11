import React, { useState} from 'react';
import { Form, FormContent, FormGroup, Label, FormText, Input, Button } from 'reactstrap';

const Login = () => {

    const initialState = {
        email: '',
        password: ''
    }

    const [loginForm, setLoginForm] = useState(initialState)

    const handleChange = (evt) => setLoginForm({
        ...loginForm,
        [evt.target.name]: evt.target.value
    });

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginForm)
            });
            const jsonResponse = await response.json();
            alert(jsonResponse.message)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
        setLoginForm({...initialState})
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="Email">Email:</Label>
                <Input type="email" 
                       name="email"
                       value={loginForm.email}
                       onChange={handleChange}
                       id="Email"/>
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password:</Label>
                <Input type="password" 
                       name="password"
                       value={loginForm.password} 
                       onChange={handleChange}
                       id="Password"/>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    )
}

export default Login;