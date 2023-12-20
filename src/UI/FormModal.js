import './FormModal.css';
import FormModalInput from './FormModalInput';

export default function FormModal(props) {
    let modalText = props.modalType == 'add' ? 'Search for a film you watched:' : 'Enter your filter parameters:';

    return (
        <div className="modal">
            <h2>{modalText}</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const params = [...e.target.children].filter((inp, ind) => (ind+2)%4==0).map(elem => elem.value.trim().toLowerCase());
                if (props.modalType == 'filter') {
                    props.onFilterConfirmClick(params, props.displayedDiary);
                    props.onBackdropClick();
                } else {
                    props.onSearchClick(params);
                }
            }}>
                <FormModalInput id="title" type="text"/>
                <FormModalInput id="director" type="text"/>
                <FormModalInput id="year-of-release" type="number"/>
                {props.modalType == 'filter' && <FormModalInput id="minimum-runtime" type="number"/>}
                {props.modalType == 'filter' && <FormModalInput id="maximum-runtime" type="number"/>}
                <button type="submit">{props.modalType == 'add' ? "Search" : "Filter"}</button>
            </form>
        </div>
    )
}
