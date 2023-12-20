import './Header.css';
import * as filmDataHandler from '../Utility/filmDataHandler';

export default function Header(props) {
    return(
        <header>
            <div>
                <h1>My Film Diary</h1>
                <div className="dropdown">
                    <button className="dropbtn">⮟</button>
                    <div className="drop-content">
                        <button onClick={() => props.modalActivation('add')}>Add film</button>
                        <div id="sort-drop">
                            <div className="drop-content" id="sort-drop-content">
                                <button onClick={() => props.sortDiary('title', false)}>Title (A-Z)</button>
                                <button onClick={() => props.sortDiary('title', true)}>Title (Z-A)</button>
                                <button onClick={() => props.sortDiary('director', false)}>Director (A-Z)</button>
                                <button onClick={() => props.sortDiary('director', true)}>Director (Z-A)</button>
                                <button onClick={() => props.sortDiary('year', false)}>Year of release (latest first)</button>
                                <button onClick={() => props.sortDiary('year', true)}>Year of release (earliest first)</button>
                                <button onClick={() => props.sortDiary('runtime', false)}>Runtime (shortest first)</button>
                                <button onClick={() => props.sortDiary('runtime', true)}>Runtime (longest first)</button>
                                <button onClick={() => props.sortDiary('watchdate', false)}>Watch date (latest first)</button>
                                <button onClick={() => props.sortDiary('watchdate', true)}>Watch date (earliest first)</button>
                                </div>
                            <button id="sort-btn">Sort by</button>
                        </div>
                        <button onClick={() => props.modalActivation('filter')}>Filter</button>
                        {props.filtered.current && (<button onClick={props.onRemoveFilterClick}>Remove filter</button>)}
                    </div>
                </div>
            </div>
        </header>
    )
}