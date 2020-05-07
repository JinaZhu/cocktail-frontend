import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="FirstName">First Name:</Label>
                <Input type="text" name="fname" id="FirstName"/>
            </FormGroup>

            <FormGroup>
                <Label for="LastName">Last Name:</Label>
                <Input type="text" name="lname" id="LastName"/>
            </FormGroup>

            <FormGroup>
                <Label for="Email">Email:</Label>
                <Input type="email" name="email" id="Email" placeholder="user@email.com"/>
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password:</Label>
                <Input type="password" name="password" id="Password" placeholder="********"/>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    )
}

export default Register;
