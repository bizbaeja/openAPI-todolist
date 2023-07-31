import React from "react";
import { useDispatch } from 'react-redux';
import  {authActions}  from 'store/auth';
import classes from "./LoginPage.module.css";
function Signup() {
  const dispatch = useDispatch();
  const signuphandler = (event) => {
    event.preventDefault();
    
    dispatch(authActions.signup());

  }

  return (
    <main className={classes.auth}>
    <section>
      <form onSubmit={signuphandler}>
        <div className={classes.control}>
          <label htmlFor='id'></label>
          <input placeholder="아이디"type='text' id='id' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'></label>
          <input placeholder="비밀번호"type='password' id='password' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'></label>
          <input placeholder="이름"type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='birth'></label>
          <input placeholder="생년월일"type='text' id='birth' />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'></label>
          <input placeholder="휴대폰번호"type='text' id='phone' />
        </div>
        <button>signup</button>
      </form>
    </section>
  </main>
    );
}

export default Signup;
