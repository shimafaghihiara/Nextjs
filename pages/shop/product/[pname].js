import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import style from "./[pname].module.css"

const Product = () => {
    const router= useRouter();
    return (
        <div className={style.div}>
            <Head>
             <title>{router.query.pname}</title>
            </Head>
            product id {router.query.pname}
            <img src={`/images/p${router.query.pname}.jpg`}/>
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