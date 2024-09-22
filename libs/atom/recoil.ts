import {atom} from "recoil"
interface UserDetailsSchema {
    id: string
    email: string,
    firstname: string,
    lastname: string
    loginDetails: {
        id: string,
        device: string
        os: string
        loginTime: string
        logoutTimes: string | null | undefined
        browser: string
        location: string
    }[]
}
export const usernameState =  atom<string>({
    key:'usernameState',
    default:""
})
export const userEmailState = atom<string>({
    key:'emailState',
    default:""
})
export const firstnameState= atom<string>({
    key: 'firstnameState',
    default: ""
})
export const lastnameState = atom<string>({
    key: 'lastnameState',
    default: ""
})