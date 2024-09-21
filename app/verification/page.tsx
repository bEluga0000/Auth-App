"use client";
import { BASE_URL } from "@/libs/urls";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Verifcation = () => {
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [mail,setMail] = useState("")
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post(
                    `${BASE_URL}/sendVerificationMail`,
                    {},
                    {
                        headers: {
                            authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5N2E2MmExLTNmMjEtNGExOS05OWM0LWQyZWU5OGI4ZDJiYiIsIm1haWwiOiJzaHJleWFzMjk3NUBnbWFpbC5jb20iLCJpYXQiOjE3MjY5MDMzMDl9.uzpriuTUitlCbfYOmrEY2zlx4FnRAzOg86qzx5EZyXc`,
                        },
                    }
                );
                if (res.data)
                {
                    console.log(res.data.verificationMail)
                    setMail(res.data.email)
                }
            } catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false)
            }
        })();
    }, []);
    return <div className="h-screen w-screen flex justify-center items-center">
        {
            error ? <div>
                Something Went Wrong while sending the verification Mail please refresh
            </div> : <div>
                Click the link which sent on your mail {mail} to verify
            </div>
        }
    </div>
}
export default Verifcation