import React from 'react'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  return (
    <div>
        <div class = 'login'>
            <div class = 'wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Email" required/>
                        <i><MdEmail /></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" required/>
                        <i><IoIosLock /></i>
                    </div>

                    <div class="remember-forget">
                        <label><input type = "checkbox"/>Remember me</label>
                        <a href="#">Forget password?</a>
                    </div>

                    <button type="submit" class="btn">Login</button>

                    <div class = "register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
