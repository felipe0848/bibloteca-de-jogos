import { useState } from "react"

export default function App(){
  const [ games , setGames ] = useState([])
  const [ title, setTitle ] = useState("")
  const [ cover, setCover ] = useState("")

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random()*1000000)
    const game = {id , title, cover}

    setGames((games) => [...games, game])
  }

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addGame({title , cover})
    setTitle("")
    setCover("") 
  }

    return(
        <>

        </>
    )
}