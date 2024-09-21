"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import { BASE_URL } from "@/libs/urls";
import axios from "axios";
import  { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const CodeVerification = () => {
    const router = useRouter()
    const [otp,setOtp] = useState("")
    const [loading,setLoading] = useState(true)
    //todo need to add the check that i am going to access that is the user is verified or not if verified no need of this page
    useEffect(()=>{
        (async()=>{
            const res = await axios.post(`${BASE_URL}/`)
        })()
    })

    const handelMainButton = () => {
        console.log("I am getting clicked")
        router.push("/")
    }
    const inputFields: InputFieldPropsTypes[] = [{
        label: "OTP",
        placeholder: "6 digit number",
        Errmsg: "Enter the correct OTP",
        type: "string",
        val:otp,
        setFunction:setOtp
    }]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "Verify OTP",
        onClick: handelMainButton,
        disable:loading
    }]
    return <div className="">
        <AuthForm
            InputFields={inputFields}
            ButtonFields={buttonFields}
            page="Check your Mail for the OTP"
        />
    </div>
}
export default CodeVerification