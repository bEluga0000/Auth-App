import { ReactNode } from "react"

export interface ButtonFieldPropsTypes{
    desc?: ReactNode
    bg?:string
    onClick?:()=>void,
    disable:boolean
}
const ButtonField:React.FC<ButtonFieldPropsTypes> = ({
    desc,
    bg,
    onClick,
    disable,
})=>{
    return <button className={`border flex justify-center p-1 w-full rounded-md h-10 hover:cursor-pointer ${bg || ''} hover:scale-105  hover:border-2 hover:border-black disabled:cursor-not-allowed`} onClick={onClick} disabled={disable}>
        <div className={`${bg? "text-white": ''} font-bold `} >{disable? "Loading...":desc}</div>
    </button>
}

export default ButtonField