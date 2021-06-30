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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header />
      <Hero />
      <MainPage />
      <Footer />

          </div>
  )
}
