import Link from "next/link"
import Image from "next/image"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import meble5 from "../../public/meble5.jpg"
import salon1 from "../../public/salon1.jpg"
import sypialnia1 from "../../public/sypialnia1.jpg"
const Galleries = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Galerie"
        info="Poniżej znajdziesz linki w formie zdjęć które przekierują Cię do poszczególnych galerii"
      />
      <ul className="lg:m-20 m-4">
        <li className="p-4 hover:scale-90 transition-transform duration-200 shadow-2xl ">
          <Link href="/galleries/1">
            <a>
              <Image
                src={meble5}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="p-4 hover:scale-90 transition-transform duration-200 shadow-2xl ">
          <Link href="/galleries/2">
            <a>
              <Image
                src={salon1}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="p-4 hover:scale-90 transition-transform duration-200 shadow-2xl ">
          <Link href="/galleries/3">
            <a>
              <Image
                src={sypialnia1}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Galleries
