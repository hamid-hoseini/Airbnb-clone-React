import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = ({ exploreData }: any) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {exploreData?.map((item: any, idx: number) => (
            <h1 key={idx}>{item.location}</h1>
          ))
          }
        </section>
      </main>

    </div>
  )
}

export default Home
 
export async function getStaticProps() {
  /**
   * return an array of object like:
   * {"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"}
  **/
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
    then((res) => res.json());

  return {
    props: {
      exploreData,
    },
  };
}