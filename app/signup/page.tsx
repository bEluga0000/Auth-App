"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import router from "next/router"

const Signup = () => {
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
        label: "username",
        placeholder: "example123",
        Errmsg: "Enter a correct username",
        type: "string"
    }, {
        label: "password",
        placeholder: "It should be more than 4 letters",
        Errmsg: "Enter the correct password",
        type: "password"
    }]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "Signup",
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
            footerMsg="Already have Account? "
            page="Create an Accont"
            pageMsgs="Email sent Successfully ✅"
            pageLink="/signin"
            pageLinkName="SignIn" />
    </div>
}
export default Signup