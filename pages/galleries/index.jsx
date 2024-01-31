import Link from "next/link"
import Image from "next/image"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import { galleriesData } from "./../../components/SliderData"
const Galleries = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Galerie"
        info="Poniżej znajdziesz linki w formie zdjęć które przekierują Cię do poszczególnych galerii"
      />
      <ul className="lg:m-20 m-4">
        {galleriesData.map((gallery) => (
          <li
            key={gallery.href}
            className="p-4 hover:scale-90 transition-transform duration-200 shadow-2xl "
          >
            <Link href={gallery.href}>
              <a>
                <Image
                  src={gallery.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Galleries
