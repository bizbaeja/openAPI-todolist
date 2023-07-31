import React from "react";
import classes from "./RollingBanner.module.css";

function RollingBanner() {
  return <>
<div className={classes.container}>
  <div className={classes.text}>This is scrolling text.</div>
</div>
  </>
}

export default RollingBanner;
