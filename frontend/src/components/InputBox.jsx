export const Inputbox=({label,placeholder,onChange,type="text"})=>{
    return <div>
        <div  className="text-xl font-medium text-orange-500 pt-4">{label}</div>
        <input placeholder={placeholder} onChange={onChange} type={type} className="rounded border-orange-300 h-8 pt-2 w-56 pb-2 pl-2"/>
    </div>

}