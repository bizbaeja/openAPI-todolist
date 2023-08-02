import React,{useState,useEffect} from "react";
import classes from "./NavBar.module.css";
import { useSelector,useDispatch } from "react-redux";
import { adminActions } from "store/admin";
import { Link } from "react-router-dom";
import { BsSearchHeart} from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { logout , onUserStateChange } from "api/firebase";

function NavBar() {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const admin = useSelector((state)=> state.admin.isAdmin)
    const postHandler = ()=>{
        dispatch(adminActions)
    }
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
                <li>
                {!admin &&(<Link onClink={postHandler}to="/admin-post">Post</Link>)}
                </li>
            <div className={classes.auth} >
                <Link to="/search"><BsSearchHeart /></Link>
                {!user && <Link to ="/login"><IoMdLogIn /></Link>}
                {/* {!user && <Link onClick={login}><IoMdLogIn /></Link>} */}
                {user && < Link onClick={logout}><IoMdLogOut /></Link>} 
                <Link to="https://www.instagram.com/popify.official/"><BsInstagram /></Link>
            </div>
            </ul>
        </nav>
        </header>
        </>
    
    )
    
  

  
}
  


export default NavBar;
