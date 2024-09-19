import DashBoard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div>
        <NavBar />
      </div>
      <div>
        <DashBoard />
      </div>
    </div>
  );
}
