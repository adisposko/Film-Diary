export default function DateModal(props) {
    return(
        <div className="modal" id="query-date">
            <h2>When did you watch "{props.filmToAdd.current.title}"?</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const dmyInput = e.target.firstChild.value;
                !!dmyInput && props.addFilmToDiary(props.filmToAdd.current, dmyInput.split('-').reverse());                
            }}>
                <input type="date"/><br/>
                <button type="submit">Add to diary</button>
            </form>
        </div>
    )
}