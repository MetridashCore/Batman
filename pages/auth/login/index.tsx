import { useState, ChangeEvent, useEffect } from "react"
import Button from "@mui/material/Button"
import Link from "next/link";
import { useRouter } from "next/router"
import checkUser from "@/utils/checkUser";
import { signInWithEmail } from "@/auth";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const router = useRouter()

    const user: any = checkUser()

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSignIn = async () => {
        try {
            await signInWithEmail(email, password)
            setMessage("User signed in successfully")
            window.location.href = "/homepage"
        } catch (error) {
            setMessage(`Error signing in: ${error}`)
        }
    }

    if (user && user.uid) {
        window.location.href = "/homepage"
    }
    return (
        <div className='h-screen bg-black' >
            <div className="flex-1 flex flex-col justify-start items-center py-40 sm:py-20 px-8 sm:px-10 md:px-12 lg:flex-none lg:px-20 xl:px-14">
                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD] text-5xl font-sans not-italic font-bold leading-loose flex justify-center">Log in</h1>
                    <p className="text-white font-sans not-italic text-sm font-normal content-center">Metridash: Your Ultimate Content Creation Companion</p>
                </div>
                <form className="w-3/12 my-14">
                    <div>
                        <label id="input-group-1" className="text-sm font-sans not-italic font-normal leading-6 text-white">Email Address</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="text"
                                id="input-group-1"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2 placeholder= name@flowbite.com" />
                        </div>
                   </div>
                    <div className=" my-3">
                        <label className="text-sm font-sans not-italic font-normal leading-6 text-white">Password</label><br />
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_309)">
                                        <path d="M10.0091 8.35306C11.3086 8.35306 12.3621 7.29957 12.3621 6.00002C12.3621 4.70047 11.3086 3.64697 10.0091 3.64697C8.7095 3.64697 7.65601 4.70047 7.65601 6.00002C7.65601 7.29957 8.7095 8.35306 10.0091 8.35306Z" fill="#8E8E8E" />
                                        <path d="M19.5904 5.00984C18.1467 3.54119 14.3227 0.125 10.0092 0.125C5.69579 0.125 1.87097 3.54119 0.427292 5.00984C0.16508 5.27266 0.0178223 5.62875 0.0178223 6C0.0178223 6.37125 0.16508 6.72734 0.427292 6.99016C1.87136 8.45881 5.69618 11.875 10.0089 11.875C14.3215 11.875 18.1467 8.45881 19.5904 6.99016C19.8526 6.72734 19.9999 6.37125 19.9999 6C19.9999 5.62875 19.8526 5.27266 19.5904 5.00984ZM10.0092 9.52391C9.31228 9.52391 8.63097 9.31723 8.05147 8.93002C7.47196 8.54281 7.02029 7.99245 6.75358 7.34854C6.48686 6.70463 6.41708 5.99609 6.55305 5.31252C6.68902 4.62895 7.02464 4.00105 7.51747 3.50822C8.01029 3.01539 8.63819 2.67977 9.32176 2.5438C10.0053 2.40783 10.7139 2.47762 11.3578 2.74433C12.0017 3.01105 12.5521 3.46272 12.9393 4.04222C13.3265 4.62173 13.5332 5.30304 13.5332 6C13.5321 6.93428 13.1605 7.83 12.4999 8.49064C11.8392 9.15127 10.9435 9.52287 10.0092 9.52391Z" fill="#8E8E8E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_309">
                                            <rect width="19.9819" height="11.75" fill="white" transform="translate(0.0180664 0.125)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <input
                                type="password"
                                id="input-group-1"
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2 placeholder= name@flowbite.com" />
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
                        >
                            <p className="text-white font-semibold">Log in</p>
                        </Button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-gray-200 border-0" />
                        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-black">or</span>
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
                </form>
            </div>
        </div>
    )
}
export default Login;