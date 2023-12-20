import Favorite from './Favorite'
import './Favorites.css';

export default function Favorites({ favesArray }) {
    const favesToBeRendered = favesArray.map(fave => <Favorite film={fave}/>)
    return <div id="favoritesFooter">
        <h1 id="footerText">My favorites</h1>
        <ul id="favorites">{favesToBeRendered}</ul>
    </div>
}