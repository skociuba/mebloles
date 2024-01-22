import Head from "next/head"
import Hero from "../components/Hero"
import Slider from "../components/Slider"
import { SliderData } from "../components/SliderData"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meble na wymiar</title>
        <meta name="description" content="Meble na wymiar Jarosław " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Leszek Stefan"
        phone="tel: 502 617 911"
        email="mebloles@gmail.com"
      />
      <Slider slides={SliderData} />
    </div>
  )
}
