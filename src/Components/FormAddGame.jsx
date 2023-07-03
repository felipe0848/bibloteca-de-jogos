import { useState } from "react"
import InputText from "./InputText"

export default function FormAddGame({ addGame }){
    const [ title, setTitle ] = useState("")
    const [ cover, setCover ] = useState("")

    const handleSubmit = (ev)=>{
        ev.preventDefault()
        addGame({title , cover})
        setTitle("")
        setCover("") 
      }
    return(
        <form onSubmit={handleSubmit}>
            <InputText label="Título" value={title} setValue={setTitle} />
            <InputText label="Capa" value={cover} setValue={setCover} />
            <button type="submit">Adicionar a bibilioteca</button>
        </form>
    )
}