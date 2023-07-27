import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  return (
  <button className={`${classes.button}${props.className}`}>포스트</button>
  )
}

export default Button