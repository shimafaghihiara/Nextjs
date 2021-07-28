import React from 'react';
import {useRouter} from "next/router"

const Product = () => {
    const router= useRouter();
    return (
        <div>
            product id {router.query.pname}
            <img src={`/images/p${router.query.pname}.jpg`}/>
        </div>
    );
};

    export default Product;