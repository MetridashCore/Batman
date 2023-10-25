import Button from "@mui/material/Button"
import Link from "next/link";
const SignUp = () => {
    return (
        <div className='h-screen bg-black' >
            <div className="flex-1 flex flex-col justify-start items-center py-40 sm:py-40 px-8 sm:px-10 md:px-12 lg:flex-none lg:px-20 xl:px-14">
                <div>
                    <h1 className="text-transparent text-white text-5xl font-sans not-italic font-bold leading-loose flex justify-center">
                        Forgotten your password?</h1>
                    <p className="text-white font-sans not-italic text-sm font-normal content-center">There is nothing to worry about, we'll send you a message to help you reset your password.</p>
                </div>
                <form className="md:w-3/12 my-14 w-full">
                    <div>
                        <label htmlFor="input-group-2" className="text-sm font-sans not-italic font-normal leading-6 text-white">Email Address</label>
                        <div className="relative mb-6">
                            <input type="text" id="input-group-2" className="w-full bg-inputf rounded-lg focus-visible:outline-none border-b-2 border-b-white py-2 px-2 my-2 placeholder= name@flowbite.com" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-9">
                        <button
                            type="submit"
                            className="w-60 bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                            // variant="contained"
                        >
                            <p className="text-black font-semibold">Send Reset Link</p>
                        </button>
                    </div> 
                </form>
            </div>
        </div>
    )
}
export default SignUp;