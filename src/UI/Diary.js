import FilmElement from './FilmElement';
import './Diary.css';

export default function Diary(props) {
    const listToRender = props.displayedDiary.map(film => 
        <FilmElement film={film} />
    )
    return(<ul id="diaryList">{listToRender}</ul>)
}