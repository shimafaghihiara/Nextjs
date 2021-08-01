import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import style from "./[pname].module.css"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography"

const Product = () => {
    const router= useRouter();
    return (
        <div className={style.div}>
            <Head>
             <title>{router.query.pname}</title>
            </Head>
           <Typography>product id {router.query.pname}</Typography>
            <img src={`/images/p${router.query.pname}.jpg`}/>
            <Button variant={"contained"} color={"primary"}>خرید محصول</Button>
            <style jsx>
                {`
                img{
                border:1px solid purple;
                }                
`}
            </style>
        </div>
    );
};

    export default Product;