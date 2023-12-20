import DiaryEntry from './DiaryEntry';
import './Diary.css';

export default function Diary(props) {
    const listToRender = props.displayedDiary.map(film => 
        <DiaryEntry film={film} />
    )
    return(<ul id="diaryList">{listToRender}</ul>)
}