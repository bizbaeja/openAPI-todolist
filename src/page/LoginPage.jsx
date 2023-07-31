import React from "react";
import { login } from "api/firebase";

function Login() {
  return <div>LoginPage
    <button  onClick={login}>login</button>
  </div>;
}

export default Login;
