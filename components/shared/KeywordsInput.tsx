import { ChangeEventHandler, FC, RefObject, forwardRef, useEffect, useRef, useState } from "react";

interface KeywordsInputInterFace extends React.HTMLProps<HTMLInputElement>{
    title:string,
    selectedKeywords: (value:string[]) => void
}

const KeywordsInput: FC<KeywordsInputInterFace> = (props) =>{

    const [keywords, setKeywords] = useState<string[]>([]);

    const keywordRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        if(keywords.length > 0){
            props.selectedKeywords(keywords);
        }
    },[props,keywords])

    const onAddKeyword = () => {
        if(keywordRef.current){
            const value = keywordRef.current.value;
            setKeywords([...keywords, value])
        }
    }

    const onRemove = (index:number) => {
        let updatedKeywords = keywords
        keywords.splice(index,1);
        setKeywords([...updatedKeywords]);
    }

    return (
        <div className="p-2 bg-blue-100 border ">
            <p className="text-lg font-bold">{props.title} {props.required && <span className="text-red-600">*</span>} </p>
            <div className="pt-1">
                <input className="w-[80%] p-2 " ref={keywordRef} placeholder={props.placeholder} {...props} />
                <button className="ml-1 pl-2 w-[10%] bg-red-400 p-2 rounded-lg" title="Add" onClick={onAddKeyword} >Add </button>
            </div>

            { keywords?.length > 0 &&
                <div className="flex">
                    {keywords.map((value,index) => (
                    <div className="flex flex-row rounded-lg p-2 w-fit bg-slate-600 m-1" key={value}>
                        <p className="text-white">{value}</p>
                        <div className="ml-4 mr-2 text-white text-lg cursor-pointer" onClick={()=>onRemove(index)}> - </div>
                    </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default KeywordsInput;