import React from 'react';
import {useRouter} from "next/router"

const P2 = () => {
    const router=useRouter();
    console.log(router.query.slug);
    return (
    <div>
        product id {router.query.slug}


    </div>
    );
    };

    export default P2;