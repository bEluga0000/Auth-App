"use client";
import AuthForm from "@/components/AuthForm"
import { ButtonFieldPropsTypes } from "@/components/ButtonField"
import { InputFieldPropsTypes } from "@/components/InputField"
import { BASE_URL } from "@/libs/urls";
import { signinSchemaType } from "@/libs/zod";
import { getClientDetails } from "@/libs/deviceD";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [clinetD, setClientD] = useState<any>(null)
    const [locationD,setLocationD] = useState<any>(null)
    const axiosBody: signinSchemaType = {
        mail: email,
        hashedPassword: password,
        clientDeatils:clinetD,
        locationDetails:locationD
    }
    useEffect(() => {
        (async () => {
            const details = await getClientDetails();
            setClientD({
                browser: details.browser.name? details.browser.name : "",
                browserVersion: details.browser.version ? details.browser.version:"",
                OS: "" + details.os.name ? details.os.name : "" + details.os.version ? details.os.version : "",
                device: details.device.type ? details.device.type:"laptop",
            })
            const location = await axios.get(`https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`)
            if(location.data)
                setLocationD("" + location.data.city + "," + location.data.country_code)
            // we need to do somethingif we failed to get the location details
        })();
    }, []);
    const handelMainButton = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/signin`, axiosBody)
            if (res.data) {
                if (!res.data.verified)
                    // we also going to get the token we going to set that in the cookies
                    router.push("/verification")
                else
                    // we going to get the token we need to set the cookies
                    router.push("/")
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }
    const inputFields: InputFieldPropsTypes[] = [{
        label: "Email",
        placeholder: "example@gmail.com",
        // Errmsg: "Enter the correct Email",
        type: "email",
        val: email,
        setFunction: setEmail
    }, {
        label: "password",
        placeholder: "It should be more than 4 letters",
        // Errmsg: "Enter the correct password",
        type: "password",
        val: password,
        setFunction: setPassword
    }]
    const buttonFields: ButtonFieldPropsTypes[] = [{
        desc: "SignIn",
        onClick: handelMainButton,
        disable: loading
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
            footerMsg="New To Here? "
            page="Welcome Back"
            pageMsgs="Email sent Successfully ✅"
            pageLink="/signup"
            pageLinkName="SignUp" />
    </div>
}
export default Signin