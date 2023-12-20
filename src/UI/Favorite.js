import './Favorite.css'

export default function Favorite({ film }) {
    if (!film) {
        return(<li key="null" className="fave"><img src={`${process.env.PUBLIC_URL}/posters/none.png`} width="70" height="105"></img></li>)
    }
}