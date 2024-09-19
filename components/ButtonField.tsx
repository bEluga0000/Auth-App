import { ReactNode } from "react"

export interface ButtonFieldPropsTypes{
    desc?: ReactNode
    bg?:string
    onClick?:()=>void
}
const ButtonField:React.FC<ButtonFieldPropsTypes> = ({
    desc,
    bg,
    onClick
})=>{
    return <div className={`border flex justify-center p-1 w-full rounded-md h-10 hover:cursor-pointer ${bg || ''} hover:scale-105 hover:border hover:border-2 hover:border-black`} onClick={onClick}>
        <button className={`${bg? "text-white": ''} font-bold `} >{desc}</button>
    </div>
}

export default ButtonField