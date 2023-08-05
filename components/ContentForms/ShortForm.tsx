import { FC, useRef, useState } from "react";
import InputBox from "../shared/InputBox";
import SelectBox from "../shared/SelectBox";
import KeywordsInput from "../shared/KeywordsInput";

interface ShortFormProps{
    selected:{
        platform:string;
        title:string;
        description:string;
    }
}

const ShortForm: FC<ShortFormProps> = (props) =>{

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
            <SelectBox title="Tone" defaultValue={"Selected Tone"}required={true}  options={["Happy","Sad"]} selectedValue={setTone} />
            <InputBox title="Target Audience" required={true} maxLength={200} currentValue={setTargetAudience}/>

            <div className="pb-4"/>
            <button className="w-full p-3 text-lg font-bold bg-blue-400 rounded-lg text-white">{`Generate`}</button>

            <p>{about}</p>
            <p>{targetAudience}</p>
            <p>{tone}</p>
        </div>
    )
}

export default ShortForm