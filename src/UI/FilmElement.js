import './FilmElement.css';

export default function FilmElement(props) {
    const film = props.film;
    return(
        <li key={props.film.id} className="filmElement">
            <img src={`${process.env.PUBLIC_URL}/posters/${film.id}.jpg`} alt={film.title} width="100" height="150"></img>
            <div className="info">
                <p>{film.title} ({film.year})</p>
                <p>Directed by {film.director}</p>
                <p>{film.runtime} min</p>
                {!!film.dmy && (<p>Watched on: {film.dmy.join('.')}.</p>)}
            </div>
        </li>
    )
}