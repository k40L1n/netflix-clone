import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'

import { Movie } from '../typings'

interface Props {
  netflixOriginals: Movie[]
}
const Home = ({ netflixOriginals }: Props) => {
  console.log(netflixOriginals)
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section></section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [netflixOriginals] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: JSON.parse(JSON.stringify(netflixOriginals)),
    },
  }
}
