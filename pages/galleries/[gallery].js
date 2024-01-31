import { useRouter } from "next/router"
import Link from "next/link"
import Slider from "./Slider"
import { SliderData } from "./SliderData"

const Comment = () => {
  const router = useRouter()
  const { gallery } = router.query

  return (
    <>
      <div className=" m-10">
        <Link href="/galleries">
          <button className="w-full sm:w-32 mx-auto sm:mx-0 border rounded-lg bg-white text-black shadow-2xl p-3 mt-2">
            Powrót
          </button>
        </Link>
      </div>{" "}
      <Slider slides={SliderData[gallery]} />
    </>
  )
}

export default Comment
