import React from "react";
import { useDispatch } from 'react-redux';
import  {authActions}  from 'store/auth';
import classes from "./LoginPage.module.css";
import {login} from 'api/firebase';
import { Link } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    
    dispatch(authActions.login());

  }

  return <div>LoginPage
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='id'></label>
            <input placeholder="아이디"type='text' id='id' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'></label>
            <input placeholder="비밀번호"type='password' id='password' />
          </div>
          <button>Login</button>
          <button onClick={login} >google Login</button>
        </form>
        <Link to="/signup" >회원가입</Link>
      </section>
    </main>
  </div>;
}

export default Login;
