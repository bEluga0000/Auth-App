"use client";
import DashBoard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import { getClientDetails } from "@/tests/deviceD";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const[clinetD,setClientD] = useState<any>(null)
  useEffect(() => {
    (async () => {
      const details = await getClientDetails();
      setClientD(details)
    })();
  }, []);
  return (
    <div className="relative">
      <div>
        {/* <NavBar /> */}
      </div>
      <div>
        {/* <DashBoard /> */}
      </div>
      <div className="">
        {JSON.stringify(clinetD)}
      </div>
    </div>
  );
}
