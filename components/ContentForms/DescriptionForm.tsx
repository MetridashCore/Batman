import { FC, useRef, useState } from "react";
import InputBox from "../shared/InputBox";
import SelectBox from "../shared/SelectBox";
import KeywordsInput from "../shared/KeywordsInput";

interface DescriptionFormProps{
    selected:{
        platform:string;
        title:string;
        description:string;
    }
}

const DescriptionForm: FC<DescriptionFormProps> = (props) =>{

    const [about,setAbout] = useState("");
    const [targetAudience,setTargetAudience] = useState("");
    const [industry,setIndustry] = useState("");
    const [tone,setTone] = useState("");
    const [keywords,setKeywords] = useState<string[]>([]);

    return(
        <div className="h-screen p-4">
            <p className="text-3xl" >{props.selected.title}</p>
            <p className="text-sm">{props.selected.description}</p>
            <div className="pb-4"/>
            <InputBox title="What's your post about?" required={true} maxLength={800} currentValue={setAbout}/>
            <SelectBox title="Industry" defaultValue={"Selected Industry"} required={true} options={["Happy","Sad"]} selectedValue={setIndustry} />
            <SelectBox title="Post Type" defaultValue={"Selected Post Type"}required={true}  options={["Happy","Sad"]} selectedValue={setTone} />
            <KeywordsInput title="Keywords"required={true} selectedKeywords={setKeywords} />
            <SelectBox title="Tone" defaultValue={"Selected Tone"}required={true}  options={["Happy","Sad"]} selectedValue={setTone} />
            <InputBox title="Target Audience" required={true} maxLength={200} currentValue={setTargetAudience}/>

            <div className="pb-4"/>
            <button className="w-full p-3 text-lg font-bold bg-blue-400 rounded-lg text-white">{`Generate`}</button>
        </div>
    )
}

export default DescriptionForm