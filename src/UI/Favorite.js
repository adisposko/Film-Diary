import './Favorite.css'

export default function Favorite(props) {
    function onFilmDropHandler(e) {
        const filmToAddToFaves = JSON.parse(e.dataTransfer.getData("text/plain"));
        const newFavesArray = JSON.parse(JSON.stringify(props.favesArray));
        newFavesArray[props.favID] = filmToAddToFaves;
        props.setFavesArray(newFavesArray);
    }
    
    const posterURL = !!props.fave ? props.fave.posterURL : `${process.env.PUBLIC_URL}/none.png`;
    return(
    <li key="null" className="fave" onDrop={onFilmDropHandler} onDragOver={(e) => e.preventDefault()}>
        <img src={posterURL} width="70" height="105" id={props.favID}>
        </img>
    </li>
    );
}