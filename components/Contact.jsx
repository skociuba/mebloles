import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.current) {
      emailjs.sendForm(form.current).then(
        (result) => {
          console.log(result.text)
          if (form.current) {
            form.current.reset()
            alert("Wiadomość została wysłana")
          }
        },
        (error) => {
          console.log(error.text)
          alert("strona w budowie, wiadomość nie została wysłana")
        }
      )
    }
  }

  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">Contact</h1>
      <form className="max-w-[600px] m-auto" ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 rounded-lg bg-gray-800  text-white"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <input
            className="border rounded-lg shadow-lg p-3   bg-gray-800  text-white"
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>
        <input
          className="border rounded-lg shadow-lg p-3 w-full my-2 bg-gray-800  text-white"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          name="message"
          className="border shadow-lg p-3 w-full rounded-lg  bg-gray-800  text-white"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="border rounded-lg bg-gray-900  text-white  shadow-lg p-3 w-full mt-2"
        />
      </form>
    </div>
  )
}

export default Contact
