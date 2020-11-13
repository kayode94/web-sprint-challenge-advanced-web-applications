import React,{useState} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from './Utils/axiosWithAuth'


const initialLoginValue = {
    username: '',
    password: ''
}
const Login = () => {

const [login, setLogin] = useState(initialLoginValue)
const {push} = useHistory()
//event handlers
const handleChange = (event) =>{
  setLogin({
      ...login,
      [event.target.name]: event.target.value
  })
}

const handleLogin = (event) =>{
  event.preventDefault()
  axiosWithAuth()
  .post('/api/login', login)
  .then(response=>{
    console.log(response.data)
    localStorage.setItem('token', response.data.payload)
    push('/bubblePage')  
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
 