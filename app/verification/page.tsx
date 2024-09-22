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
                            authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3ODg0NWE4LTMyYjctNGRmZC1hMzMxLWQxNGYxODNhMGMwZSIsIm1haWwiOiJzaHJleWFzMzAyMDA1QGdtYWlsLmNvbSIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNzI2OTc2MTA5fQ.8g_yJjQHnJUBmsYHAo8qVn2PXnzW9gpSHsmufAs6j-4`,
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