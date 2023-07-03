import { useState } from "react"
import InputText from "./Components/InputText"

export default function App(){
  const [ games , setGames ] = useState(()=>{
    const storedGames = localStorage.getItem("lib-games")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })
  const [ title, setTitle ] = useState("")
  const [ cover, setCover ] = useState("")

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

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addGame({title , cover})
    setTitle("")
    setCover("") 
  }

    return(
        <>
        <h1>Biblioteca de jogos</h1>
        
        <form onSubmit={handleSubmit}>
          <InputText label="Título" value={title} setValue={setTitle} />
          <InputText label="Capa" value={cover} setValue={setCover} />
          <button type="submit">Adicionar a bibilioteca</button>
        </form>

        <div className="games">
          {games.map((game) => (
            <div key={game.id}>
              <img src={game.cover} alt={game.title} />
              <div>
                <h2>{game.title}</h2>
                <button onClick={() => removeGame(game.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
        </>
    )
}