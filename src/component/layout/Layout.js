import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer"

/*
Header
Main
Footer

 */

export default ({children})=>{
    return <div>
        <Header/>
        {children}
        <Footer/>



    </div>
}