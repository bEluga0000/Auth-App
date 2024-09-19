import { useState } from "react"
import InputField from "../InputField"
import EditButton from "./EditButton"
import FormButtons from "./FormButtons"
import ComponentFields from "./ComponetsFields"
export interface FieldsSchema{
    FieldName?:string
    Value?:string
    placeholder?:string
}
export interface DashBoardComponentProps{
    componentName?:string
    fields?:FieldsSchema[]
}
const DashBoardComponent:React.FC<DashBoardComponentProps>= ({
    componentName,
    fields,
}) => {
    return <div className="mx-5 mt-3">
        <div className="border rounded-lg bg-slate-200">
            <p className="px-2 py-0.5">{componentName}Personal</p>
        </div>
        <div className="mt-2">
            {
                fields?.map((filed)=>{
                    return <ComponentFields FieldName={filed.FieldName} Value={filed.Value} placeholder={filed.placeholder}/>
                })
            }
            
            
            
        </div>
    </div>
}
export default DashBoardComponent