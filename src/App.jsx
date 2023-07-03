import { useState } from "react"
import FormAddGame from "./Components/FormAddGame"
import AllGames from "./Components/AllGames"

export default function App(){
  const [ games , setGames ] = useState(()=>{
    const storedGames = localStorage.getItem("lib-games")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })


  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random()*1000000)
    const game = {id , title, cover}

    setGames((games) => {
      const gamesArray = [...games, game]
      localStorage.setItem("lib-games", JSON.stringify(gamesArray))
      return gamesArray
    })
  }

  const removeGame = (id) => {
    setGames((games) => {
      const gamesArray = games.filter(game => game.id !== id)
      localStorage.setItem("lib-games", JSON.stringify(gamesArray))
      return gamesArray
    })
  }



    return(
        <>
        <h1>Biblioteca de jogos</h1>

        <FormAddGame addGame={addGame}/>

        <AllGames games={games} removeGame={removeGame}/>
        
        </>
    )
}