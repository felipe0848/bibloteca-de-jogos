export default function AllGames({ games , removeGame }){
    return(
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
    )
}