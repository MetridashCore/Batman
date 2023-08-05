import { ChangeEventHandler, FC, RefObject, forwardRef, useState } from "react";

interface InputBoxInterFace extends React.HTMLProps<HTMLInputElement>{
    title:string,
    required?:boolean;
    currentValue: (value:string) => void
}

const InputBox: FC<InputBoxInterFace> = (props) => {

    const [inputLength, setInputLength] = useState(0);

    const updateInputLength: ChangeEventHandler<HTMLInputElement> = (event) =>{
        const currentValue = event.currentTarget.value;
        setInputLength(currentValue.length);
        props.currentValue(currentValue);
    }

    return (
        <div className="p-2 bg-blue-100">
            <div className="flex justify-between">
                <p className="text-lg font-bold">{props.title} {props.required && <span className="text-red-600">*</span>} </p>
                {props.maxLength && <p className="al">{inputLength}/{props.maxLength}</p>}
            </div>
            <input {...props} className="w-full text-lg p-2 placeholder:text-gray-500 border-r" onChange={updateInputLength} {...props}/>
        </div>
    )
}

export default InputBox;