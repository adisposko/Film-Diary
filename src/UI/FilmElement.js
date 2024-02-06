import './FilmElement.css';

export default function FilmElement(props) {
    
    //defines data transfer for draggable filmElement
    function onFilmDragHandler(e, film) {
        const obj = {posterURL: film.posterURL, title: film.title}
        e.dataTransfer.setData("text/plain", JSON.stringify(obj));
    }
    
    const film = props.film;
    return(
        <li key={film.id} className="filmElement" draggable={!!film.dmy ? "true" : "false"} onDragStart={(e) => onFilmDragHandler(e, film)}>
            <img src={film.posterURL} alt={film.title}></img>
            <div className="info">
                <p>{film.title} ({film.year})</p>
                <p>Directed by {film.director}</p>
                <p>{film.runtime} min</p>
                {!!film.dmy && (<p>Watched on: {film.dmy.join('.')}.</p>)}
            </div>
        </li>
    )
}