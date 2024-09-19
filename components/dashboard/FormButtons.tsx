interface FormButtonsProps{
    cOnclick: ()=>void
}
const FormButtons:React.FC<FormButtonsProps> = ({
    cOnclick
})=>{
    return <div className="flex gap-6 mt-3">
        <div className="">
            <button className="px-4 py-0.5  rounded-lg text-white bg-sky-600 font-semibold hover:bg-sky-800">
                Save
            </button>
        </div>
        <div>
            <button className=" px-4 py-0.5  rounded-lg font-semibold hover:bg-slate-200 border border-slate-300" onClick={cOnclick}>
                Cancel
            </button>
        </div>
    </div>
}
export default FormButtons