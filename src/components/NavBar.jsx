import React,{useState,useEffect} from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { BsSearchHeart} from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import {IoMdLogOut} from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { login,logout , onUserStateChange } from "api/firebase";
function NavBar() {

    const [user, setUser] = useState(null);
  // 사용자의 정보를 가져오는 함수
    useEffect(()=>{
        onUserStateChange((user)=>{
            console.log(user)
            setUser(user)
        })
    }, [])

return ( 
        <>
        <header className={classes.header}>
            <Link to="/">
                <h1>logo</h1>
            </Link>
      
        <nav className={classes.navigation}>
            <ul>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                 <Link to="/contents">Contents</Link>
                </li>
            
            <div className={classes.auth} >
                <Link to="/search"><BsSearchHeart /></Link>
                {!user && <Link onClick={login}><IoMdLogIn /></Link>}
                {user && < Link onClick={logout}><IoMdLogOut /></Link>}
                <Link to="/signup"><BsInstagram /></Link>
            </div>
            </ul>
        </nav>
        </header>
        </>
    
    )
    
  

  
}
  


export default NavBar;
