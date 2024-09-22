"use client";
import DashBoard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import { BASE_URL } from "@/libs/urls";
import { getClientDetails } from "@/tests/deviceD";
import axios from "axios";
import { headers } from "next/headers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil"
import { firstnameState, lastnameState, userEmailState, usernameState } from "@/libs/atom/recoil"
// "id": "b78845a8-32b7-4dfd-a331-d14f183a0c0e",
//   "email": "shreyas302005@gmail.com",
//     "firstname": "Shreyas",
//       "lastname": "Shetty",
//         "loginDetails": [
//           {
//             "id": "335a85c1-6e6d-4e39-b8ac-eada3a6c893e",
//             "device": "laptop",
//             "os": "Windows",
//             "loginTime": "2024-09-22T05:54:18.762Z",
//             "logoutTime": null,
//             "browser": "Chrome",
//             "location": "Bengaluru,IN",
//             "userId": "b78845a8-32b7-4dfd-a331-d14f183a0c0e"
//           },

interface UserDetailsSchema{
  id:string
  email:string,
  firstname:string,
  lastname:string
  username:String
  loginDetails:{
    id:string,
    device:string
    os:string
    loginTime:string
    logoutTimes:string|null|undefined
    browser:string
    location:string
  }[]
}
export default function Home() {
  const setUsernameR = useSetRecoilState(usernameState)
  const setFirstnameR = useSetRecoilState(firstnameState)
  const setLastnameR = useSetRecoilState(lastnameState)
  const setEmailR = useSetRecoilState(userEmailState)
  const[userD,setUserD] = useState<any>(null)
  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get(`${BASE_URL}/me`,{
          headers:{
            authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3ODg0NWE4LTMyYjctNGRmZC1hMzMxLWQxNGYxODNhMGMwZSIsIm1haWwiOiJzaHJleWFzMzAyMDA1QGdtYWlsLmNvbSIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MjcwMTA2MzN9.W5n8GRRJ0rNqckBCaY2Cd22mZkNtnq9KWxzEQz7Aby0"
          }
        })
        if(res.data)
        {
          setFirstnameR(res.data.user.email)
          setLastnameR(res.data.user.firstname)
          setLastnameR(res.data.user.lastname)
          setUsernameR(res.data.user.username)
        }
      }catch(e:any){
        console.log(e)
      }
    })();
  }, []);
  return (
    <div className="relative">
      <div>
        <NavBar />
      </div>
      <div>
        <DashBoard />
      </div>
      <div className="">
        {/* {JSON.stringify(clinetD)} */}
      </div>
    </div>
  );
}
