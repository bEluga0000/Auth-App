export interface InputFieldPropsTypes{
    label?:string
    type?:string
    placeholder?:string
    Errmsg?:string
    outline?:boolean
    setFunction:(value:string)=>void
    val:string
}
const InputField:React.FC<InputFieldPropsTypes> = ({
    label,
    type,
    placeholder,
    Errmsg,
    outline,
    val,
    setFunction
})=>{
    return <div className="flex flex-col gap-1 ">
        <label htmlFor="field" className="font-semibold">{label}</label>
        <input
            type={type}
            id="field"
            className={`px-1.5 py-1 border border-slate-400 font-semibold rounded-md ${outline ? 'focus:outline-2 focus:outline-offset-2 focus:outline-blue-500' : ''}`}
            placeholder={placeholder}
            value={val}
            onChange={(e)=>{
                setFunction(e.target.value)
            }}
        />

        <p className="text-sm text-red-700 font-medium">{Errmsg}</p>
    </div>
}
export default InputField