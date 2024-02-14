export const Inputbox=({label,placeholder,onChange})=>{
    return <div>
        <div  className="text-xl text-white font-normal">{label}</div>
        <input placeholder={placeholder} onChange={onChange} className="border-2 rounded-md px-2 py-1  "/>
    </div>

}