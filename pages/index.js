import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import MainPage from '../Components/MainPage'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>India's first social review platform</title>
        <meta name="description" content="Reviews for all D2C Indian products. Now discover and share new Indian products by downloading Candid App " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero /> 
      <MainPage />

    </div>
  )
}
