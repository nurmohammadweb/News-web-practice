import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

// const Login = () => {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const from = e.target;
//     const email = from.email.value;
//     const password = from.password.value;
//     console.log({ email, password });
//   }
// }

const Login = () => {
  const {signIn} = use(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log({ email, password });

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user)
    })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorCode, errorMessage)
      });
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <h2 className='text-center font-bold mt-4'>Login Your account</h2>

        <form onSubmit={handleLogin} className="card-body">
           
          <fieldset className="fieldset">
            
            {/* email */}
          <label className="label">Email</label>
            <input type="email"
              name='email'
              className="input" placeholder="Email" />
            
            {/* password */}
          <label 
          className="label">Password</label>
            <input type="password" className="input"
          name='password'    placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p>Dont’t Have An Account ? <Link to="/auth/register"><span className='text-secondary'>Register</span></Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  );
};

export default Login;