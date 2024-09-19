"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import  { useRouter } from "next/navigation"

const CodeVerification = () => {
    const router = useRouter()
    const handelMainButton = () => {
        console.log("I am getting clicked")
        router.push("/")
    }
    const inputFields: InputFieldPropsTypes[] = [{
        label: "OTP",
        placeholder: "6 digit number",
        Errmsg: "Enter the correct OTP",
        type: "string"
    }]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "Verify OTP",
        onClick: handelMainButton
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