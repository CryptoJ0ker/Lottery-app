import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../components/Header.js"
import LotteryEntrance from "../components/LotteryEntrance.js"

export default function Home() {
    return (
        <div className={styles.myContainer}>
            <Head>
                <title>Lottery Next App</title>
                <meta name="description" content="Smart contract Lotery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
