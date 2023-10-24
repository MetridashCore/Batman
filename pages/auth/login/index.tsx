import { useState, ChangeEvent, useEffect } from "react"
import * as Yup from 'yup';
import Button from "@mui/material/Button"
import Link from "next/link";
import { useRouter } from "next/router"
import checkUser from "@/utils/checkUser";
import { signInWithEmail } from "@/auth";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { SignInValues } from "./type/authValues";

const Login = () => {
    const [showHidePasswordIn, setShowHidePasswordIn] = useState<boolean>(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter()

    const user: any = checkUser()

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const handleSignIn = async () => {
         setIsLoading(true);
        try {
            await signInWithEmail(email, password);
            setMessage("User signed in successfully");
            router.push('/homepage');
        } catch (error) {
            console.error(error)
            setMessage('Error signing in');
        } finally {
            setIsLoading(false);
        }
    }

    if (user && user.uid) {
        router.push('/homepage');
    }


    return (
        <div className='h-screen bg-black' >
            <div className="flex-1 flex flex-col justify-start items-center py-40 sm:py-20 px-8 sm:px-10 md:px-12 lg:flex-none lg:px-20 xl:px-14">
                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD] text-5xl font-sans not-italic font-bold leading-loose flex justify-center">Log in</h1>
                    <p className="text-white font-sans not-italic text-sm font-normal content-center">Metridash: Your Ultimate Content Creation Companion</p>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('This field is required'),
                        password: Yup.string()
                            .required('This field is required')
                            .matches(
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                                'Must contain at least one uppercase and one number'
                            )
                            .min(
                                8,
                                'Password is too short - should be 8 characters minimum'
                            ),
                    })}
                    onSubmit={(
                        values: SignInValues,
                        { setSubmitting }: FormikHelpers<SignInValues>
                    ) => {
                        let formDetails = {
                            email: values.email,
                            password: values.password,
                        };
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form noValidate autoComplete="off" className="w-3/12 my-14">
                            <div>
                                <label htmlFor="input-group-1" className="text-sm font-sans not-italic font-normal leading-6 text-white">Email Address</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <Field
                                        type="email"
                                      id="input-group-1"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2 placeholder= name@flowbite.com text-white"
                                    />
                                    <ErrorMessage name="email">
                                        {(msg: string) => (
                                            <div style={{ color: 'red' }}>{msg}</div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className=" my-3">
                                <label className="text-sm font-sans not-italic font-normal leading-6 text-white">Password</label><br />
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5" onClick={() =>
                                        setShowHidePasswordIn(!showHidePasswordIn)
                                    } >
                                        <span className="flex justify-around items-center cursor-pointer"
                                        >
                                            {showHidePasswordIn ? (
                                                <svg
                                                    id="Layer_1"
                                                    enableBackground="new 0 0 519.643 519.643"
                                                    height="24"
                                                    viewBox="0 0 519.643 519.643"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#666"
                                                >
                                                    <circle cx="259.823" cy="259.866" r="80" />
                                                    <path d="m511.673 237.706c-61.494-74.31-154.579-145.84-251.85-145.84-97.29 0-190.397 71.58-251.85 145.84-10.63 12.84-10.63 31.48 0 44.32 15.45 18.67 47.84 54.71 91.1 86.2 108.949 79.312 212.311 79.487 321.5 0 43.26-31.49 75.65-67.53 91.1-86.2 10.599-12.815 10.654-31.438 0-44.32zm-251.85-89.84c61.76 0 112 50.24 112 112s-50.24 112-112 112-112-50.24-112-112 50.24-112 112-112z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    id="Capa_1"
                                                    enableBackground="new 0 0 512 512"
                                                    height="24"
                                                    viewBox="0 0 512 512"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#666"
                                                >
                                                    <g>
                                                        <path d="m436.193 169.626c-5.507-4.735-11.04-9.258-16.589-13.59l-64.701 64.701c3.942 11.027 6.097 22.898 6.097 35.263 0 57.897-47.103 105-105 105-12.365 0-24.236-2.155-35.263-6.098l-48.558 48.558c28.356 11.632 56.481 17.54 83.821 17.54 32.657 0 66.432-8.396 100.384-24.955 26.662-13.005 53.514-31.063 79.809-53.671 44.455-38.226 71.841-76.024 72.984-77.615 3.765-5.232 3.765-12.285 0-17.518-1.144-1.591-28.529-39.389-72.984-77.615z" />
                                                        <path d="m256 331c41.355 0 75-33.645 75-75 0-3.598-.27-7.134-.763-10.598l-84.835 84.835c3.465.493 7 .763 10.598.763z" />
                                                        <path d="m507.607 4.394c-5.857-5.857-15.355-5.857-21.213 0l-117.848 117.848c-4.056-2.208-8.111-4.311-12.162-6.286-33.952-16.56-67.727-24.956-100.384-24.956s-66.432 8.396-100.384 24.955c-26.662 13.005-53.514 31.063-79.809 53.671-44.454 38.226-71.84 76.024-72.984 77.615-3.765 5.232-3.765 12.285 0 17.518 1.144 1.591 28.529 39.39 72.984 77.615 13.623 11.713 27.396 22.192 41.214 31.391l-112.627 112.629c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.928 6.767 4.393 10.606 4.393s7.678-1.465 10.606-4.394l482-482c5.859-5.857 5.859-15.355.001-21.212zm-356.607 251.606c0-57.897 47.103-105 105-105 23.551 0 45.315 7.794 62.85 20.938l-21.52 21.52c-11.859-7.864-26.065-12.458-41.33-12.458-41.355 0-75 33.645-75 75 0 15.264 4.594 29.47 12.458 41.33l-21.52 21.52c-13.144-17.535-20.938-39.299-20.938-62.85z" />
                                                    </g>
                                                    </svg>
                                            )}
                                        </span>
                                    </div>
                                    <Field
                                        type={showHidePasswordIn ? "text" : "password"}
                                        id="input-group-1"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        autoComplete="current-password"
                                        className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2 placeholder= name@flowbite.com text-white" />
                                    <ErrorMessage name="email">
                                        {(msg: string) => (
                                            <div style={{ color: 'red' }}>{msg}</div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="coding" name="interest" value="coding" />
                                        <label className="text-white font-sans not-italic text-xs font-normal px-2 mt-0">Remember me</label>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-sans not-italic text-xs font-normal text-center">Forgot password? <Link href='/auth/passwordreset' className="text-[#007ABF]">Reset</Link></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-9">
                                <Button
                                    type="submit"
                                    className="button-gradient w-60"
                                    variant="contained"
                                    onClick={handleSignIn}
                                    disabled={isLoading}
                                >
                                    <p className="text-white font-semibold">
                                        {isLoading ? "Log in..." : "Log In"}
                                    </p>
                                </Button>
                            </div>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-full h-px my-8 bg-gray-200 border-0" />
                                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                            </div>
                            {message && <p className="text-white">{message}</p>}
                            <div className="flex justify-center my-5">
                                <button type="button" className="w-60 text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 focus-visible:none">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_17_233)">
                                            <path d="M10.516 21.5003C16.3238 21.5003 21.032 16.7993 21.032 11.0003C21.032 5.20131 16.3238 0.500305 10.516 0.500305C4.70817 0.500305 0 5.20131 0 11.0003C0 16.7993 4.70817 21.5003 10.516 21.5003Z" fill="#2C2C2C" />
                                            <path d="M10.5158 21.1808C16.2354 21.1808 20.872 16.5513 20.872 10.8404C20.872 5.12956 16.2354 0.5 10.5158 0.5C4.79629 0.5 0.159668 5.12956 0.159668 10.8404C0.159668 16.5513 4.79629 21.1808 10.5158 21.1808Z" fill="#0D0D0D" />
                                            <mask id="mask0_17_233" mask-type="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
                                                <path d="M17.2283 9.62762H10.6758V12.3404H14.4474C14.0958 14.0638 12.6255 15.0531 10.6758 15.0531C8.37439 15.0531 6.52051 13.2021 6.52051 10.9042C6.52051 8.60634 8.37439 6.75528 10.6758 6.75528C11.6666 6.75528 12.5616 7.10635 13.2648 7.68081L15.3105 5.63825C14.0639 4.55315 12.4657 3.88293 10.6758 3.88293C6.77622 3.88293 3.6438 7.01059 3.6438 10.9042C3.6438 14.7978 6.77622 17.9255 10.6758 17.9255C14.1917 17.9255 17.3881 15.3723 17.3881 10.9042C17.3881 10.4893 17.3242 10.0425 17.2283 9.62762Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_17_233)">
                                                <path d="M3.00439 15.0532V6.75531L8.43818 10.9042L3.00439 15.0532Z" fill="#FBC41E" />
                                            </g>
                                            <mask id="mask1_17_233" mask-type="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
                                                <path d="M17.2283 9.62762H10.6758V12.3404H14.4474C14.0958 14.0638 12.6255 15.0531 10.6758 15.0531C8.37439 15.0531 6.52051 13.2021 6.52051 10.9042C6.52051 8.60634 8.37439 6.75528 10.6758 6.75528C11.6666 6.75528 12.5616 7.10635 13.2648 7.68081L15.3105 5.63825C14.0639 4.55315 12.4657 3.88293 10.6758 3.88293C6.77622 3.88293 3.6438 7.01059 3.6438 10.9042C3.6438 14.7978 6.77622 17.9255 10.6758 17.9255C14.1917 17.9255 17.3881 15.3723 17.3881 10.9042C17.3881 10.4893 17.3242 10.0425 17.2283 9.62762Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_17_233)">
                                                <path d="M3.00439 6.75527L8.43818 10.9042L10.6756 8.9574L18.3469 7.71271V3.24463H3.00439V6.75527Z" fill="#EC594C" />
                                            </g>
                                            <mask id="mask2_17_233" mask-type="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
                                                <path d="M17.2283 9.62762H10.6758V12.3404H14.4474C14.0958 14.0638 12.6255 15.0531 10.6758 15.0531C8.37439 15.0531 6.52051 13.2021 6.52051 10.9042C6.52051 8.60634 8.37439 6.75528 10.6758 6.75528C11.6666 6.75528 12.5616 7.10635 13.2648 7.68081L15.3105 5.63825C14.0639 4.55315 12.4657 3.88293 10.6758 3.88293C6.77622 3.88293 3.6438 7.01059 3.6438 10.9042C3.6438 14.7978 6.77622 17.9255 10.6758 17.9255C14.1917 17.9255 17.3881 15.3723 17.3881 10.9042C17.3881 10.4893 17.3242 10.0425 17.2283 9.62762Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_17_233)">
                                                <path d="M3.00439 15.0531L12.5934 7.71271L15.1185 8.03186L18.3469 3.24463V18.5638H3.00439V15.0531Z" fill="#3ABB5D" />
                                            </g>
                                            <mask id="mask3_17_233" mask-type="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
                                                <path d="M17.2283 9.62762H10.6758V12.3404H14.4474C14.0958 14.0638 12.6255 15.0531 10.6758 15.0531C8.37439 15.0531 6.52051 13.2021 6.52051 10.9042C6.52051 8.60634 8.37439 6.75528 10.6758 6.75528C11.6666 6.75528 12.5616 7.10635 13.2648 7.68081L15.3105 5.63825C14.0639 4.55315 12.4657 3.88293 10.6758 3.88293C6.77622 3.88293 3.6438 7.01059 3.6438 10.9042C3.6438 14.7978 6.77622 17.9255 10.6758 17.9255C14.1917 17.9255 17.3881 15.3723 17.3881 10.9042C17.3881 10.4893 17.3242 10.0425 17.2283 9.62762Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask3_17_233)">
                                                <path d="M18.3469 18.5638L8.43821 10.9042L7.15967 9.9468L18.3469 6.75531V18.5638Z" fill="#5A96F5" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_233">
                                                <rect width="21" height="21" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="px-3">Continue with Google</p>
                                </button>
                            </div>
                            <p className="text-white font-sans not-italic text-xs font-normal text-center">No account yet? <Link href='/auth/createaccount' className="text-[#007ABF]">Sign Up</Link></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Login;