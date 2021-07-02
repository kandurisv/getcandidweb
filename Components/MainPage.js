import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles1 from '../styles/componentStyles.module.css'
import styles from '../styles/Home.module.css'

function MainPage() {
    return (
        <div className = {styles1.mainPage}>
            <main className={styles.main}>
                <h1 className={styles.title}>India's 1st social product reviews platform </h1>
                <p className={styles.description}>
                   Write and Read reviews for India's largest D2C brands. 
                </p>
                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>Discover &rarr;</h2>
                        <p>Discover great Indian D2C products and take part in D2C revolution</p>
                    </a>
                    <a className={styles.card}>
                        <h2>Social &rarr;</h2>
                        <p>Write product reviews to influence your network </p>
                    </a>
                    <a className={styles.card}>
                        <h2>Authentic &rarr;</h2>
                        <p>Be authentic and increase your follower base.</p>
                    </a>
                    <a className={styles.card}>
                        <h2>Share &rarr;</h2>
                        <p>Save your liked products and share with your network.</p>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default MainPage
