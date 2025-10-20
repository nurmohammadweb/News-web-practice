import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const { createUser,setUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
     const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
      const user = result.user
        // console.log(user)
        setUser(user)
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    })
 }

  return (
   <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-center font-bold mt-4'>Register Your account</h2>
      <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* //name */}

          <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" required/>
            
         {/* //photo */}
          <label 
          className="label">PhotoURL</label>
            <input name="photo" type="text" className="input" placeholder="PhotoURL" required />
            
            {/* //email */}
          <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required/>
            
        {/* //password */}
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>
          {/* <div><p className="link link-hover">Accept Term & Conditions</p></div> */}
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p>Already Have An Account ? <Link to="/auth/login"><span className='text-secondary'>Login</span></Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  );
};

export default Register;
