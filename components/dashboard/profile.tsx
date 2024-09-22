import { useState } from "react"
import EditButton from "./EditButton"
import ProfileForm from "./profileForm"
import { useSetRecoilState } from "recoil"
import { firstnameState, lastnameState, userEmailState, usernameState } from "@/libs/atom/recoil"

export interface profileSegSchema{
    username:string,
    firstname:string
    lastname:string
}

const Profile = ({username,firstname,lastname}:profileSegSchema) => {
    const [usernameE, setUsername] = useState(username)
    const [firstnameE, setFirstname] = useState(firstname)
    const[lastnameE,setLastname] = useState(lastname)

    const[form,setShowForm] = useState<boolean>(false) 
    const toggleForm = ()=>{
        setShowForm((prev)=>!prev)
    }
    return <div className={`flex flex-col px-6 py-2 gap-4  
    ${form ? 'md:flex-row' : ''} md:justify-start md:gap-20`}>
        <div className={`flex justify-between items-center ${form ? 'md:items-start' : ''}`}>
            <div className="flex flex-col gap-2">
                <div>
                    <img src="/profile.png" alt="" className="h-20 rounded-full shadow-md " />
                </div>
                {<div>
                    <div className="text-lg font-semibold">
                        {"Username"}
                    </div>
                </div>}
            </div>
            {
                !form && <div className="">
                    <EditButton onclick={toggleForm} />
                </div>
            }
            
        </div>
        {
            form && <div className="w-4/5 md:w-3/5 lg:w-2/5">
                <ProfileForm toggleForm={toggleForm}/>
            </div> 
        }
        
    </div>


}

export default Profile