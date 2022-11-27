import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Let's build Airbnb!</h1>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  )
}

export default Home
