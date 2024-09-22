"use client";
import DashBoardSignIn from "./dashboard/DashBoardSignin"
import LoginDetails from "./dashboard/LoginDetails"
import Personal from "./dashboard/Personal"
import { profileSegSchema } from "./dashboard/profile";
import ProfileSeg from "./dashboard/ProfileSeg"

interface DashBoardSchema{
    profileSeg:profileSegSchema
}
const DashBoard = () => {
    return <div className="mt-16 absolute w-screen flex flex-col gap-3">
        <div>
            <ProfileSeg username={username}/>
        </div>
        <div>
            <Personal />
        </div>
        <div>
            <DashBoardSignIn />
        </div>
        <div>
            <LoginDetails />
        </div>
        <div className="h-4">

        </div>
    </div>
}
export default DashBoard