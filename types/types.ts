type FormType = 
    | "Description"
    | "Long"
    | "Short"
    | "Tags"


export interface FormOption {
    title:string;
    description:string;
    formType:FormType,
}


export interface SelectedOption extends FormOption{
    platform:string
}