import React from 'react'
import classes from './Title.module.css'
function Title({ type, value, onChange}) {
  return (
    <input className={classes.input} placeholder="제목입니다"type="text"
    value={value}
    onChange={onChange}
     />
  )
}

export default Title