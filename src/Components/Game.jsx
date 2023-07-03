export default function Game({title, cover , removeGame }){
    return(
        <div className="games">
            <div>
                <img src={cover} alt={title} />
                <div>
                <h2>{title}</h2>
                <button onClick={removeGame}>Remover</button>
                </div>
            </div>
        </div>
    )
}