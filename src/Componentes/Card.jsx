import filmes from '../Services/dados'

function Card(){
    return(
        <>
        {filmes.map(filme => 
            <div key={filme.id}>
                <h2>{filme.nome}</h2>
                <p>{filme.descricao}</p>
                <img widht={100} height={300} src={filme.imagem} alt="imagem dos filmes"/>
            </div>
            )}
        </>
    )
}

export default Card;