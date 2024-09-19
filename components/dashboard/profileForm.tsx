import InputField, { InputFieldPropsTypes } from "../InputField"
import FormButtons from "./FormButtons"

interface ProfileFormProps{
    toggleForm:()=>void

}
const ProfileForm:React.FC<ProfileFormProps> = ({
    toggleForm
})=>{
    const inputFields: InputFieldPropsTypes[] = [{
        label: "First Name",
        placeholder: "Manja",
        Errmsg: "Error In Updating",
        type: "text",
        outline:true
    }, {
        label: "Last Name",
        placeholder: "Shaha",
        Errmsg: "Error in upadting",
        type: "text",
        outline:true
    }, {
        label: "Username",
        placeholder: "12Manja",
        Errmsg: "Error in updating",
        type: "text",
        outline:true
    }]
    return <div>
        {
            <div>{
                inputFields.map(field => {
                    return <div>
                        <InputField
                            label={field.label}
                            placeholder={field.placeholder}
                            type={field.type}
                            Errmsg={field.Errmsg}
                            outline={field.outline} />
                    </div>
                })
                }
                <div>
                    <FormButtons cOnclick={toggleForm}/>
                </div>
            </div>
        }
    </div>
}
export default ProfileForm