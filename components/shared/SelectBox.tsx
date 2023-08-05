import { ChangeEventHandler, FC, RefObject, forwardRef, useState } from "react";

interface SelectBoxInterFace extends React.HTMLProps<HTMLSelectElement>{
    title:string,
    options:string[]
    selectedValue: (value:string) => void
}

const SelectBox: FC<SelectBoxInterFace> = (props) =>{

    const onChange:ChangeEventHandler<HTMLSelectElement> = (event) =>{
        const value = event.target.value;
        props.selectedValue(value);
    }

    return (
        <div className="p-2 ">
            <p className="text-lg font-bold">{props.title} {props.required && <span className="text-red-600">*</span>} </p>
            <div className="relative ">
                <select className=" appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...props} onChange={onChange}>
                    <option value="" disabled selected>{props.defaultValue}</option>
                    {props.options.map((val)=><option key={val} value={val}>{val}</option>)}
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SelectBox;