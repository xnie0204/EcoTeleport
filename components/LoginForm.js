import React from 'react'

import { useState } from 'react';
import { Button, Form, Message } from "semantic-ui-react";


function LoginForm({Login,error}) {
    const [details,setDetails] = useState({name: "", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
      <Form onSubmit={submitHandler} error={!!error}>
        <h2>Login</h2>

        <div>
          <Form.Input
            fluid
            label="name"
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <br />

        <br />

        <div>
          <Form.Input
            fluid
            label="password"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <br />

        {error != "" ? <Message error header="Oops!" content={error} /> : ""}

        <Button color="teal" type="submit">
          Login in
        </Button>

    
          <a>
            <Button
              color="red"
              floated="right"
              content="Register"
              width={100}
            />
          </a>
    
      </Form>
    );
}

export default LoginForm