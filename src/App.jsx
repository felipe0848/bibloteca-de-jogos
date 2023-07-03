import FormAddGame from "./Components/FormAddGame"
import Game from "./Components/Game"
import useGameColection from "./hooks/useGameColection"

export default function App(){

  const { games, addGame, removeGame } = useGameColection()

    return(
        <>
          <h1>Biblioteca de jogos</h1>

          <FormAddGame addGame={addGame}/>

          <div className="games">
            {games.map((game) => (
              <Game
                  key={game.id} 
                  title={game.title}
                  cover={game.cover}
                  removeGame={() => removeGame(game.id)}
              />           
            ))}
          </div>
        </>
    )
}