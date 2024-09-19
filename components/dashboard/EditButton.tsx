interface EditButtonProps {
    onclick:()=>void
}
const EditButton:React.FC<EditButtonProps> = ({
    onclick
})=>{
    return <div className="hover:border cursor-pointer rounded-lg hover:bg-blue-200 transition delay-150 ease-in-out duration-300">
        <button className="text-blue-600 px-3 py-2 " onClick={onclick}>
            Edit
        </button>
    </div>
}
export default EditButton