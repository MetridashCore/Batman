import React, { useState } from "react"
import EmailIcon from "@mui/icons-material/Email"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"
import classes from "./contact.module.css"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  const disabled = () => {
    return !name.trim().length || !email.trim().length || !message.trim().length
  }

  const addFirestoreData = async () => {
    await addDoc(collection(db, "contactUs"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    })
  }

  const dataAfterSubmit = () => {
    setName("")
    setEmail("")
    setMessage("")
    setResponse(
      "You have successfully submitted the form. We will get back to you as soon as possible."
    )
    setTimeout(() => {
      setResponse("")
    }, 5000)
  }

  const addData = async () => {
    try {
      await addFirestoreData()
      dataAfterSubmit()
    } catch (ex) {
      console.log("Something went wrong", ex)
    }
  }

  const doSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (disabled()) return
    await addData()
  }

  return (
    <div className={`${classes.contact__container} bg-gray-50`}>
      <div
        className={`${classes.contact_confirm} bg-black flex flex-col items-center pt-14 px-5`}
      >
        <h1 className="font-medium text-3xl text-white">
          Ready to create some awesome content?
        </h1>
        <p className="text-white py-5 text-left text-lg">
          We&apos;d love to hear back from you and help you to generate the best
          content. Please get in touch with us by dropping an email or filling
          out the form.
        </p>
        <div className="flex flex-row self-start">
          <EmailIcon color="primary" className="self-start mr-2"></EmailIcon>
          <p className=" underline  text-white">info@metridash.com</p>
        </div>
      </div>
      <div
        className={`${classes.contact__form} items-center bg-black text-left`}
      >
        <h1 className="font-medium text-2xl text-white mb-4">Contact Us</h1>
        <form onSubmit={doSubmit}>
          <TextField
            sx={{
              marginTop: 3,
            }}
            id="outlined-controlled"
            className="w-10/12"
            label="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
            fullWidth
          />
          <TextField
            sx={{
              marginTop: 3,
            }}
            id="outlined-controlled"
            className="w-10/12 rounded-xl "
            label="Email"
            type="email"
            value={email}
            fullWidth
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <TextField
            sx={{
              marginTop: 3,
              marginBottom: 1,
              display: "block",
            }}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-10/12 my-1"
            fullWidth
            // defaultValue="Default Value"
          />
          <Button
            type="submit"
            className="button-gradient py-8 px-8 flex self-center"
            variant="contained"
            disabled={disabled()}
          >
            <p className="text-white font-semibold">Submit</p>
          </Button>
        </form>
        {response && <p className="text-white mt-5">{response}</p>}
      </div>
    </div>
  )
}
