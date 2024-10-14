import React from 'react'
import '../style/Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
	<div className="container login">
		<h1 className="label">User Login</h1>
		<form className="login_form">
			<div className="font">Email or Phone</div>
			<input  type="text" name="email"/>
			<div id="email_error">Please fill up your Email or Phone</div>
			<div className="font font2">Password</div>
			<input type="password" name="password"/>
			<div id="pass_error">Please fill up your Password</div>
			<button type="submit">Login</button>
		</form>
        <Link to="/layout">Home</Link>
	</div>	
      
    </>
  )
}
