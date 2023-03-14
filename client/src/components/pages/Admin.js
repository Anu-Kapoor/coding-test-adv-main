import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';


const Admin = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const localSignin = localStorage.getItem("signin");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  // const localName = localStorage.getItem("name");

  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);


  useEffect(()=>{
    if(localSignin){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })

   const handleClick=()=>{
    if(name.current.value&&email.current.value && password.current.value)
   {
    //  localStorage.setItem("name",name.current.value)
     localStorage.setItem("email",email.current.value)
     localStorage.setItem("password",password.current.value)
     localStorage.setItem("signin",email.current.value)
     alert("Account created successfully!!")
     window.location.reload()
   }
}

  const handleSignIn = () => {
    if (email.current.value == localEmail && password.current.value == localPassword) {
      localStorage.setItem("signin", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid Credential");
    }
  }

  const logoutHandler = () => {
      localStorage.removeItem("signin");
      window.location.reload()
  };

  const deleteaccountHandler = () => {
    localStorage.removeItem("signin");
    localStorage.removeItem("email");
    // localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("CartItems");
    window.location.reload()
};


  return (
    <div>
       <title>Account</title>
      {(showHome) ? <>
 
    <h1>
    Welcome !
    </h1>
 

  <button onClick={logoutHandler}>Logout</button> 
 <span> <button onClick={deleteaccountHandler}> Delete Profile </button></span>



          
       </>   :
        (show ?
          <div className="container">
            <h1>Hello !</h1>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
          :
          <div className="container">
            <div className="input_space">
              <input placeholder="Name" type='text' ref={name} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>)
      }
    </div >


  );
};

export default Admin;



// <React.Fragment>
// {error && (
//   <ErrorModal
//     title={error.title}
//     message={error.message}
//     onConfirm={errorHandler}
//   />
// )}
// <Card className={classes.input}>
//   <form onSubmit={addUserHandler}>
//     <label htmlFor="username">Username</label>
//     <input id="username" type="text" ref={nameInputRef} />
//     <label htmlFor="age">Age (Years)</label>
//     <input id="age" type="number" ref={ageInputRef} />
//     <button type="submit">Add User</button>
//   </form>
// </Card>
// </React.Fragment>