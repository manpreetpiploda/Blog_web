import React from 'react'
import Tempelate from '../components/core/Auth/Tempelate'
import loginImage from "../assets/images/green.webp"

function Login() {
  return (
    <Tempelate
      title="Welcome back"
      description="Login your account"
      image={loginImage}
      formType="login"
    />
  )
}

export default Login