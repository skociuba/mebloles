import meble1 from "../public/meble1.jpg"
import meble2 from "../public/meble2.jpg"
import meble3 from "../public/meble3.jpg"
import meble4 from "../public/meble4.jpg"
import meble5 from "../public/meble5.jpg"
import salon1 from "../public/salon1.jpg"
import salon2 from "../public/salon2.jpg"
import salon3 from "../public/salon3.jpg"
import salon4 from "../public/salon4.jpg"
import sypialnia1 from "../public/sypialnia1.jpg"
import sypialnia2 from "../public/sypialnia2.jpg"
import sypialnia3 from "../public/sypialnia3.jpg"
import sypialnia4 from "../public/sypialnia4.jpg"

export const galleriesData = [
  {
    href: "/galleries/1",
    image: meble5,
  },
  {
    href: "/galleries/2",
    image: salon1,
  },
  {
    href: "/galleries/3",
    image: sypialnia1,
  },
]

export const SliderData = {
  1: [
    {
      image: meble1,
      portrait: false,
    },
    {
      image: meble2,
      portrait: false,
    },
    {
      image: meble3,
      portrait: false,
    },
    {
      image: meble4,
      portrait: true,
    },
    {
      image: meble5,
      portrait: false,
    },
  ],
  2: [
    {
      image: salon1,
      portrait: false,
    },
    {
      image: salon2,
      portrait: true,
    },
    {
      image: salon3,
      portrait: false,
    },
    {
      image: salon4,
      portrait: false,
    },
  ],
  3: [
    {
      image: sypialnia1,
      portrait: false,
    },
    {
      image: sypialnia2,
      portrait: true,
    },
    {
      image: sypialnia3,
      portrait: false,
    },
    {
      image: sypialnia4,
      portrait: false,
    },
  ],
}
