import React from 'react';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  const [data, setData] = useState({email: '', password: ''});

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO add login service
  };

  return (
    <div className='container w-50 p-5'>
      <Form onSubmit={submitHandler} className='p-5 border border-5 border-warning rounded bg-secondary'>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Email" required value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
