"use client";
import { BASE_URL } from "@/libs/urls";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Verifcation = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [mail, setMail] = useState("")
    const searchParams  =useSearchParams()
    const token = searchParams.get('token')
    const router = useRouter()
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.patch(
                    `${BASE_URL}/sendVerificationMail?token=${token}`);
                if (res.data) {
                    router.push("/signin")
                }
            } catch (error) {
                router.push("/verification")
                console.error(error);
            }
            finally {
                setLoading(false)
            }
        })();
    }, []);
    return <div className="h-screen w-screen flex justify-center items-center">
        {
            loading ? <div>
                <div>
                    Verifying.....
                </div>
            </div> :
            error ? <div>
                Something Went Wrong while sending the verification Mail please refresh
            </div> : <div>
                Click the link which sent on your mail {mail} to verify
            </div>
        }
    </div>
}
export default Verifcation