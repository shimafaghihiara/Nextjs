import React from 'react';
import Link from "next/link";
import Head from "next/head"

const Index = () => {
    return (
        <div>
            <Head>
                <title>محصولات برتر</title>
                <link rel="shortcut icon" type="image/x-icon" href="/images/p1.jpg" />

            </Head>

            <nav>
                <ul>
                    <li><Link href={"/shop/product/1"}>محصول 1</Link></li>
                    <li><Link href={"/shop/product/2"}>محصول 2</Link></li>
                    <li><Link href={"/shop/product/3"}>محصول 3</Link></li>
                    <li><Link href={"/shop/product/4"}>محصول 4</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Index;