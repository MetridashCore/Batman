import { FC, useRef, useState } from "react";
import InputBox from "../shared/InputBox";
import SelectBox from "../shared/SelectBox";
import KeywordsInput from "../shared/KeywordsInput";

interface TagsFormProps{
    platform:string;
    title:string;
    description:string;
}

const TagsForm: FC<TagsFormProps> = (props) =>{

    const [about,setAbout] = useState("");

    return(
        <div className="h-screen p-4">
            <p className="text-3xl" >{props.selected.title}</p>
            <p className="text-sm">{props.selected.description}</p>
            <div className="pb-4"/>
            <InputBox title="What's your post about?" required={true} maxLength={800} currentValue={setAbout}/>
            
            <div className="pb-4"/>
            <button className="w-full p-3 text-lg font-bold bg-blue-400 rounded-lg text-white">{`Generate`}</button>

        </div>
    )
}

export default TagsForm