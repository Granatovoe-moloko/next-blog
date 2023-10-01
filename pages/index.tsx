import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Blogs from './blogs'


export default function Home() {
  return (
    <>
      <Head>
        <title>Next-blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      <Blogs blogs={[]}/>
      </main>
    </>
  )
}
