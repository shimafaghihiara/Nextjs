import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
       <nav>
         <ul>
           <li><Link href={"/contact"}>تماس</Link></li>
             <li><Link href={"/about"}>درباره ما</Link></li>
             <li><Link href={"/shop"}>فروشگاه</Link></li>
         </ul>
       </nav>
    </div>
  )
}
