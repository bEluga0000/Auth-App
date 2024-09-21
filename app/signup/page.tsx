"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import { useRouter } from "next/navigation"
import { useState } from "react";
import axios from "axios"
import { signupSchemaType } from "@/libs/zod";
import { BASE_URL } from "@/libs/urls";
const Signup = () => {
    const [username,setUsername] = useState("")
    const [firstname,setFirstname] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [lastname,setLastname] = useState("")
    const router = useRouter()
    const [loading,setLoading] = useState(false)
    const axiosBody:signupSchemaType = {
        first:firstname,
        hashedPassword:password,
        last:lastname,
        mail:email,
        username
    }
    //todo useEffect work to check that user enter the all the details correctls 
    const handelMainButton =async () => {
        try{ 
            setLoading(true)
            const res = await axios.post(`${BASE_URL}/signup`,axiosBody)
            if(res.data)
            {
                if(res.data.emailExist)
                {
                    //todo add toster telling login
                    router.push("/signin") 
                }
                if (res.data.token){
                    //todo need to set the cookies
                    //todo toaster telling that we user created
                    console.log(res.data)
                    // router.push("/codeverify")
                }
            }
        }
        catch(e:any){
            if (e.name == "AxiosError")
                console.log(e.response.data.msg)
            else
                console.log(e.message)
        }
        finally{
            setLoading(false)
        }
    }
    const inputFields: InputFieldPropsTypes[] = [{
        label: "Email",
        placeholder: "example@gmail.com",
        // Errmsg: "Enter the correct Email",
        type: "email",
        val:email,
        setFunction:setEmail
    
    }, {
        label: "username",
        placeholder: "example123",
        // Errmsg: "Enter a correct username",
        type: "string",
        val:username,
        setFunction:setUsername
    }, {
        label: "password",
        placeholder: "It should be more than 4 letters",
        // Errmsg: "Enter the correct password",
        type: "password",
        val:password,
        setFunction:setPassword
    },{
        label: "First Name",
        placeholder: "First Name",
        // Errmsg: "Enter the correct password",
        type: "text",
        val:firstname,
        setFunction:setFirstname
        }, {
            label: "Last Name",
            placeholder: "Last Name",
            // Errmsg: "Enter the correct password",
            type: "text",
            val:lastname,
            setFunction:setLastname
        }
]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "Signup",
        onClick: handelMainButton,
        disable:loading
    }, 
    // {
    //     desc: <div className="flex items-center gap-4">
    //         <p>GitHub</p>
    //         <img src="/github.png " className="h-6" />
    //     </div>
    // }, {
    //     desc: <div className="flex items-center gap-4">
    //         <p>Google</p>
    //         <img src="/google.jpeg " className="h-6" />
    //     </div>
    // }
]
    return <div className="">
        <AuthForm
            InputFields={inputFields}
            ButtonFields={buttonFields}
            footerMsg="Already have Account? "
            page="Create an Accont"
            pageMsgs="Email sent Successfully ✅"
            pageLink="/signin"
            pageLinkName="SignIn" />
    </div>
}
export default Signup