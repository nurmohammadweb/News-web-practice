import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
           <h2 className='text-center font-bold mt-4'>Login Your account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p>Dont’t Have An Account ? <Link to="/auth/register"><span className='text-secondary'>Register</span></Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  );
};

export default Login;