import Profile, {  profileSegSchema } from "./profile"

const ProfileSeg = ({username}:profileSegSchema)=>{
    return <div>
        <Profile username={username}/>
    </div>
}

export default ProfileSeg