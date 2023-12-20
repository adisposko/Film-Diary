import './SearchResultsModal.css';
import DiaryEntry from './DiaryEntry';

export default function SearchResultsModal(props) {
    const listToRender = props.searchResults.current.map(film => 
        <div className="searchResult" onClick={(e) => {
            props.filmToAdd.current = film;
            props.modalActivation("queryDate");
        }}>
            <DiaryEntry film={film}/>
        </div>
    )
    
    return(
        <div className="modal" id="search-results">
            <h2>Find the film you watched</h2>
            <ul>{listToRender}</ul>
        </div>
    )
}