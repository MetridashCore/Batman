import Button from "@mui/material/Button"
import Link from "next/link";
const SignUp = () => {
    return (
        <div className='h-screen bg-black' >
            <div className="flex-1 flex flex-col justify-start items-center py-40 sm:py-20 px-8 sm:px-10 md:px-12 lg:flex-none lg:px-20 xl:px-14">
                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#1E9AFE] to-[#60DFCD] text-5xl font-sans not-italic font-bold leading-loose flex justify-center">Sign up</h1>
                    <p className="text-white font-sans not-italic text-sm font-normal content-center">Metridash: Your Ultimate Content Creation Companion</p>
                </div>
                <form className="w-100 my-14">
                    <div>
                        <label className="text-sm font-sans not-italic font-normal leading-6">Name</label><br />
                        <input
                            id="outlined-controlled"
                            className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                            placeholder="Name"
                        />
                    </div>
                    <div className="my-3">
                        <label className="text-sm font-sans not-italic font-normal leading-6">Email Address</label><br />
                        <input
                            id="outlined-controlled"
                            className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                            placeholder="email"
                            type="email"
                        />
                    </div> 
                    <div className="my-3">
                        <label className="text-sm font-sans not-italic font-normal leading-6">Password</label><br />
                        <input
                            id="outlined-controlled"
                            className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                            placeholder="password"
                            type="password"
                        />
                        <p className="text-white font-sans not-italic text-xs font-normal">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
                    </div> 
                    <div className="my-3">
                        <label className="text-sm font-sans not-italic font-normal leading-6"> Confirm Password</label><br />
                        <input
                            id="outlined-controlled"
                            className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2"
                            placeholder="password"
                            type="password"
                        />
                    </div> 
                    <div className="flex items-center">
                        <input type="checkbox" id="coding" name="interest" value="coding"/>
                        <label className="text-white font-sans not-italic text-xs font-normal px-2 mt-0">Remember me</label>
                    </div>
                    <div className="flex items-center justify-center mt-9">
                        <Button
                            type="submit"
                            className="button-gradient w-60"
                            variant="contained"
                        >
                            <p className="text-white font-semibold">Sign up</p>
                        </Button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-gray-200 border-0"/>
                            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-black">or</span>
                    </div>
                    <div className="flex justify-center my-5">
                        <button type="button" className="w-60 text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
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
                            <p className="px-3">Sign in with Google</p>
                        </button>
                    </div>
                    <p className="text-white font-sans not-italic text-xs font-normal text-center">Already have an account? <Link href='/' className="text-[#007ABF]">Login</Link></p>
                </form>
           </div>
        </div>
    )
}
export default SignUp;