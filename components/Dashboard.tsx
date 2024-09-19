"use client";
import DashBoardSignIn from "./dashboard/DashBoardSignin"
import LoginDetails from "./dashboard/LoginDetails"
import Personal from "./dashboard/Personal"
import ProfileSeg from "./dashboard/ProfileSeg"

const DashBoard = () => {
    return <div className="mt-16 absolute w-screen flex flex-col gap-3">
        <div>
            <ProfileSeg />
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