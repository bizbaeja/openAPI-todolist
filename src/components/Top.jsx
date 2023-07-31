import React from "react";
import classes from "./Top.module.css";
function Top() {
    const topBtnhandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
        
  return(
    <>
    <button className={classes.top} onClick={topBtnhandler}>Top</button>

    </>
  )
}

export default Top;
