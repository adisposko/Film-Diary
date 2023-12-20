import './Modal.css';
import FormModal from './FormModal';
import SearchResultsModal from './SearchResultsModal';
import DateModal from './DateModal';

export default function Modal(props) {
        return(
        <>
            <div className="backdrop" onClick={props.onBackdropClick}></div>
            {props.modalType == 'searchToAdd' ? <SearchResultsModal searchResults={props.searchResults} modalActivation={props.modalActivation} filmToAdd={props.filmToAdd}/>
            : props.modalType == 'queryDate' ? <DateModal filmToAdd={props.filmToAdd} addFilmToDiary={props.addFilmToDiary}/>
            : <FormModal onFilterConfirmClick={props.onFilterConfirmClick} onSearchClick={props.onSearchClick} onBackdropClick={props.onBackdropClick} displayedDiary={props.displayedDiary} modalType={props.modalType}/>
            }
            
        </>
    )
}