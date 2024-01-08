import React, { useState } from 'react'
import Head from 'next/head'
import EmailIcon from '@mui/icons-material/Email'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import classes from './contact.module.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const disabled = () => {
        return (
            !name.trim().length ||
            !email.trim().length ||
            !message.trim().length
        )
    }

    const addFirestoreData = async () => {
        await addDoc(collection(db, 'contactUs'), {
            name,
            email,
            message,
            createdAt: serverTimestamp(),
        })
    }

    const dataAfterSubmit = () => {
        setName('')
        setEmail('')
        setMessage('')
        setResponse(
            'You have successfully submitted the form. We will get back to you as soon as possible.'
        )
        setTimeout(() => {
            setResponse('')
        }, 5000)
    }

    const addData = async () => {
        try {
            await addFirestoreData()
            dataAfterSubmit()
        } catch (ex) {
            console.log('Something went wrong', ex)
        }
    }

    const doSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (disabled()) return
        await addData()
    }

    return (
        <>
            <Head>
                <title>Metridash - Contact Us</title>
            </Head>
            <div className={`${classes.contact__container} bg-gray-50`}>
                <div
                    className={`${classes.contact_confirm} bg-black flex flex-col items-center pt-14 px-5`}
                >
                    <h1 className="font-medium title-style">
                        Ready to create some awesome content?
                    </h1>
                    <p className="text-para py-5 text-left text-lg">
                        We&apos;d love to hear back from you and help you to
                        generate the best content. Please get in touch with us
                        by dropping an email or filling out the form.
                    </p>
                    <div className="flex flex-row self-start">
                        <EmailIcon
                            color="primary"
                            className="self-start mr-2"
                        ></EmailIcon>
                        <p className=" underline  text-para">
                            info@metridash.com
                        </p>
                    </div>
                </div>
                <div
                    className={`${classes.contact__form} items-center bg-black text-left`}
                >
                    <h1 className="font-medium text-para mb-4">Contact Us</h1>
                    <form onSubmit={doSubmit} className="w-96">
                        <div>
                            <label className="text-sm font-sans not-italic font-normal leading-6">
                                Name
                            </label>
                            <br />
                            <input
                                id="outlined-controlled"
                                className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                                placeholder="Name"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                        </div>
                        <div className="my-3">
                            <label className="text-sm font-sans not-italic font-normal leading-6">
                                Email
                            </label>
                            <br />
                            <input
                                id="outlined-controlled"
                                className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                                placeholder="email"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </div>
                        <div className="my-3">
                            <label className="text-sm font-sans not-italic font-normal leading-6">
                                Message
                            </label>
                            <br />
                            <textarea
                                id="outlined-multiline-static"
                                placeholder="Message"
                                // multiline
                                rows={4}
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="submit"
                                className="button-gradient"
                                variant="contained"
                                disabled={disabled()}
                            >
                                <p className="text-white font-semibold">
                                    Submit
                                </p>
                            </Button>
                        </div>
                    </form>
                    {response && <p className="text-white mt-5">{response}</p>}
                </div>
            </div>
        </>
    )
}
