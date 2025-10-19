import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
   <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-center font-bold mt-4'>Register Your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" />
          <label className="label">PhotoURL</label>
          <input type="photourl" className="input" placeholder="PhotoURL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          {/* <div><p className="link link-hover">Accept Term & Conditions</p></div> */}
            <button className="btn btn-neutral mt-4">Register</button>
            <p>Already Have An Account ? <Link to="/auth/login"><span className='text-secondary'>Login</span></Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  );
};

export default Register;
