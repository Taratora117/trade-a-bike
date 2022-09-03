import React from 'react';

const Login = () => {
  return (
    <div className='container w-50 p-5 bg-secondary'>
      <div className='row'>
        <label className='mb-2' htmlFor='email'>Email</label>
        <input className='form-control' id='email' type="email" />
      </div>
      <div className='row'>
        <label className='mb-2' htmlFor='password'>Password</label>
        <input className='form-control' id='password' type="password" />
      </div>
    </div>
  );
};

export default Login;
