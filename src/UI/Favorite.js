import './Favorite.css'

export default function Favorite(props) {
    const favID = props.favID;
    
    //adds film to favorite spot when dropped
    function onFilmDropHandler(e) {
        const filmToAddToFaves = JSON.parse(e.dataTransfer.getData("text/plain"));
        const newFavesArray = JSON.parse(JSON.stringify(props.favesArray));
        newFavesArray[favID] = filmToAddToFaves;
        props.setFavesArray(newFavesArray);
    }

    //removes film from favorite spot when clicked
    function removeFaveOnClick(e) {
        if (!!props.favesArray[favID]) {
            const newFavesArray = JSON.parse(JSON.stringify(props.favesArray));
            newFavesArray[favID] = null;
            props.setFavesArray(newFavesArray);
        }        
    }
    
    const posterURL = !!props.fave ? props.fave.posterURL : `${process.env.PUBLIC_URL}/none.png`;
    
    return(
    <li key="null" className="fave" onDrop={onFilmDropHandler} onDragOver={(e) => e.preventDefault()} onClick={removeFaveOnClick}>
        <img src={posterURL} width="70" height="105" id={favID}>
        </img>
    </li>
    );
}