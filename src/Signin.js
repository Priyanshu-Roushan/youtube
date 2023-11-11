import React, { useState } from 'react'
import { Link, RedirectFunction } from 'react-router-dom'

import credentials from './useful-data-main/credentials.json'

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateUser = (email, password) => {
        console.log(credentials)
        for(let i = 0; i < credentials.length; i++){
            console.log(credentials[i], email, password)
            if(credentials[i].email == email 
                && credentials[i].password == password){
                
                console.log("credentials matched")
                    return true;
            }
        }
        return false;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submit handler")
        const emailId = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        const isValidUser = validateUser(emailId, password);
        console.log(isValidUser)
        if(isValidUser){
            localStorage.setItem('isUserLoggedIn', true);
            localStorage.setItem('email', emailId);
            alert('User valid')
            console.log(window.location)
            // alert('wait')
            window.location.replace('http://localhost:3000')
        }else{
            alert('Credentials Invalid!!!')
        }

        
        // return <RedirectFunction  />
    }

    console.log(window.location)
  return (
    <div class="signin">
      <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <Link to={'/'}>
            <button class="signin-action-buttons btn btn-secondary">Back</button>
        </Link>
        <button
            onClick={(event) => submitHandler(event)}
            class="signin-action-buttons btn btn-primary">Submit</button>        </form>
    </div>
  )
}

export default Signin
