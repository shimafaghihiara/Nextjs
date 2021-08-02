import React from "react" ;
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography"
import style from "./Header.module.css"


export default ()=>{
    return <AppBar className={style.appbar}>
        <Typography>منوی اصلی</Typography>
        <img src={"https://toplearn.com/Site/images/logo.svg?v=3"} className={style.imglogo}/>
    </AppBar>
}