import { useState } from "react"
import { FieldsSchema } from "./DashBoardComponent"
import InputField from "../InputField"
import FormButtons from "./FormButtons"
import EditButton from "./EditButton"

const ComponentFields:React.FC<FieldsSchema> = ({
    FieldName,
    placeholder,
    Value
})=>{
    const [showForm, setShowForm] = useState<boolean>(false)
    const toogleForm = () => {
        setShowForm((prev) => !(prev))
    }
    return <div className="mt-3">
        <div className="grid grid-cols-12">
            <div className={`flex flex-col col-span-6 md:col-span-5 md:flex-row`}>
                <div className="text-slate-300 ">
                    {FieldName}
                </div>
                <div className="md:hidden">
                    <p>{Value ? Value : "Not set"}</p>
                </div>
                {showForm && <div className="md:hidden">
                    <InputField placeholder={placeholder} />
                    <FormButtons cOnclick={toogleForm} />
                </div>}
            </div>
            {
                !showForm && <div className="hidden md:block md:col-span-4  ">
                    <p className="text-left">{Value ? Value : "Not set"}</p>
                </div>
            }
            {
                showForm && <div className="hidden md:block md:col-span-4">
                    <InputField placeholder={placeholder} />
                    <FormButtons cOnclick={toogleForm} />
                </div>
            }
            {!showForm && <div className="col-span-6 justify-self-end md:col-span-3">
                <EditButton onclick={toogleForm} />
            </div>}

        </div>
    </div>
}
export default ComponentFields