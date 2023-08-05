import DescriptionForm from "@/components/ContentForms/DescriptionForm";
import LongForm from "@/components/ContentForms/LongForm";
import ShortForm from "@/components/ContentForms/ShortForm";
import GPTResponse from "@/components/GPTRespone";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SELECTED_OPTION = {
    platform:"youtube",
    title:"Generate Youtube Video Ideas",
    description:"Optimize your content for greater visibility and higher engagement"
}

const ContentCreation: NextPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-1/2 p-4 bg-red-400">
                {/* <DescriptionForm selected={SELECTED_OPTION}/> */}
                {/* <LongForm selected={SELECTED_OPTION}/> */}
                <ShortForm selected={SELECTED_OPTION} />

            </div>
            <div className="w-1/2 p-4 bg-blue-500">
                <GPTResponse platform={"youtube"}></GPTResponse>
            </div>
        </div>
    )
}


export default ContentCreation;