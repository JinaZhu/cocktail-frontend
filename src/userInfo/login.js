import React from 'react';
import { Form, FormContent, FormGroup, Label, FormText, Input, Button } from 'reactstrap';

const Login = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="Email">Email:</Label>
                <Input type="email" name="email" id="Email"/>
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password:</Label>
                <Input type="password" name="password" id="Password"/>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    )
}

export default Login;