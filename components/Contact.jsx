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
      <h1 className="text-2xl font-bold text-center p-4">Kontakt</h1>
      <form className="max-w-[600px] m-auto" ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-2xl p-3 rounded-lg"
            type="text"
            name="user_name"
            placeholder="Imię i Nazwisko"
          />
          <input
            className="border shadow-2xl p-3 rounded-lg"
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>
        <input
          className="border rounded-lg shadow-2xl p-3 w-full my-2"
          type="text"
          name="subject"
          placeholder="Tytuł"
        />
        <textarea
          name="message"
          className="border shadow-2xl p-3 w-full rounded-lg "
          cols="30"
          rows="10"
          placeholder="Wiadomość"
        ></textarea>

        <input
          type="submit"
          value="Wyślij email"
          className="border rounded-lg shadow-2xl p-3 w-full mt-2"
        />
      </form>
    </div>
  )
}

export default Contact
