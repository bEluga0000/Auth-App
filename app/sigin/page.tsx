"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import { useRouter } from "next/router"

const Signin = () => {
    const router = useRouter()
    const handelMainButton = () => {
        console.log("I am getting clicked")
        router.push("/codeverify")
    }
    const inputFields: InputFieldPropsTypes[] = [{
        label: "Email",
        placeholder: "example@gmail.com",
        Errmsg: "Enter the correct Email",
        type: "email"
    }, {
        label: "password",
        placeholder: "It should be more than 4 letters",
        Errmsg: "Enter the correct password",
        type: "password"
    }]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "SignIn",
        onClick: handelMainButton
    }, {
        desc: <div className="flex items-center gap-4">
            <p>GitHub</p>
            <img src="/github.png " className="h-6" />
        </div>
    }, {
        desc: <div className="flex items-center gap-4">
            <p>Google</p>
            <img src="/google.jpeg " className="h-6" />
        </div>
    }]
    return <div className="">
        <AuthForm
            InputFields={inputFields}
            ButtonFields={buttonFields}
            footerMsg="New To Here? "
            page="Welcome Back"
            pageMsgs="Email sent Successfully ✅"
            pageLink="/signup"
            pageLinkName="SignUp" />
    </div>
}
export default Signin