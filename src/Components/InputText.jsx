export default function InputText({ label, value, setValue }){
    return(
        <div>
            <label htmlFor={label}>{label}:</label>
            <input type="text" id={label} value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}