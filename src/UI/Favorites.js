import Favorite from './Favorite'
import './Favorites.css';

export default function Favorites(props) {
    const favesToBeRendered = props.favesArray.map((fave, index) => <Favorite fave={fave} favID={index} setFavesArray={props.setFavesArray} favesArray={props.favesArray}/>)
    return (
    <div id="favoritesFooter">
        <h1 id="footerText">My favorites</h1>
        <ul id="favorites">{favesToBeRendered}</ul>
    </div>
    )
}