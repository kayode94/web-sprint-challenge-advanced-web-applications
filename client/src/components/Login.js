import React,{useState} from "react";
import {axiosWithAuth} from './Utils/axiosWithAuth'


const initialLoginValue = {
  credentials:{
    username: '',
    password: ''
  }
}
const Login = () => {

const [login, setLogin] = useState(initialLoginValue)

//event handlers

const handleChange = (event) =>{
  setLogin({
    credentials:{
      ...login,
      [event.target.name]: event.target.value
    }
  })
}

const handleLogin = (event) =>{
  axiosWithAuth()
  .post('/api/login', login)
  .then(response=>{
    console.log(response.data)
    localStorage.setItem('token', response.data.payload)  
    
  })
  .catch(error=>{
    console.log('THIS IS YOUR ERROR', error)
  })
}
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleLogin}>
        <input 
        type='text'
        name='username'
        placeholder='Please Enter Username'
        value={login.username}
        onChange={handleChange}
        />

        <input 
        type='password'
        name='password'
        placeholder='Please Enter Password'
        value={login.password}
        onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
 