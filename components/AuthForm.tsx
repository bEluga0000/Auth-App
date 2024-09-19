import {  useRouter } from "next/router"
import ButtonField, { ButtonFieldPropsTypes } from "./ButtonField"
import InputField, { InputFieldPropsTypes } from "./InputField"

interface AuthFormPropsTypes{
    page?:string
    InputFields?:InputFieldPropsTypes[]
    ButtonFields?:ButtonFieldPropsTypes[]
    footerMsg?:string
    pageMsgs?:string
    pageLink?:string
    pageLinkName?:string
    backArrow?:string
}
const AuthForm:React.FC<AuthFormPropsTypes> = ({
    page,
    InputFields,
    ButtonFields,
    footerMsg,
    pageMsgs,
    pageLink,
    pageLinkName,
    backArrow="ggs"
})=>{
    const router = useRouter()
    return <div className="h-screen w-screen flex justify-center bg-gray-800 ">
        <div className="  flex flex-col sm:w-8/12  w-full  p-4 sm:border  sm:rounded-xl bg-white md:w-1/2 lg:w-1/3 sm:m-2">
        {
                backArrow && <div className="flex">
                    <div className="cursor-pointer px-2 py-1 border rounded-lg hover:scale-105" onClick={()=>{
                        router.back()
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                        </svg>

                    </div>
                </div>
        }
            
            <div className="flex  mb-2 justify-center">
                <div>
                    <h1 className="text-3xl font-black">🔐</h1>
                </div>
                <div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-black"> Auth </h1>
                    </div>
                    <div>
                        <p className="text-slate-500 ">{page}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                {
                    InputFields?.map(field=>{
                        return <div>
                            <InputField
                            label={field.label}
                            placeholder={field.placeholder}
                            type={field.type}
                            Errmsg={field.Errmsg}/>
                        </div>
                    })
                }
            </div>
            {
                pageMsgs && <div className="my-2 flex p-1 text-green-950 text-sm font-bold">
                    <p className=" bg-green-200 p-2">{pageMsgs}</p>
                </div>
            }
            
            {/* button part */}
            {
                ButtonFields && (
                    <div className="flex flex-col gap-1 mt-1">
                        <div>
                            <ButtonField
                                bg="bg-black"
                                desc={ButtonFields.length > 0 ? ButtonFields[0].desc : "Button"}
                                onClick={ButtonFields[0].onClick}
                            />
                        </div>
                        <div className="flex gap-2">
                            {ButtonFields.length > 1 && (
                                <div className="flex-1">
                                    <ButtonField
                                        bg=""
                                        desc={
                                            ButtonFields[1].desc || (
                                                <div className="flex items-center gap-4">
                                                    <p>GitHub</p>
                                                    <img src="/github.png" className="h-6" alt="GitHub" />
                                                </div>
                                            )
                                        }
                                        onClick={ButtonFields[1].onClick}
                                    />
                                </div>
                            )}
                            {ButtonFields.length > 2 && (
                                <div className="flex-1">
                                    <ButtonField
                                        bg=""
                                        desc={
                                            ButtonFields[2].desc || (
                                                <div className="flex items-center gap-4">
                                                    <p>Google</p>
                                                    <img src="/google.jpeg" className="h-6" alt="Google" />
                                                </div>
                                            )
                                        }
                                        onClick={ButtonFields[1].onClick}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

            {
                footerMsg && <div className="flex justify-center mt-2 gap-2">
                    <p>{footerMsg}</p>
                    <div className="font-bold hover:scale-105 cursor-pointer underline underline-offset-1 " onClick={() => { router.push(pageLink ? pageLink : "") }}>{pageLinkName}</div>
                </div>
            }
            
        </div>
    </div>
}

export default AuthForm