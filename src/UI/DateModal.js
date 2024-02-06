export default function DateModal(props) {
    const date = new Date();
    const currentMonth = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1); //reminder: getMonth result counts from 0, so september is 8
    const currentDMY = `${date.getFullYear()}-${currentMonth}-${date.getDate()}`; //parsed in HTML as YYYY-MM-DD
    return(
        <div className="modal" id="query-date">
            <h2>When did you watch "{props.filmToAdd.current.title}"?</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const dmyInput = e.target.firstChild.value;
                !!dmyInput && props.addFilmToDiary(props.filmToAdd.current, dmyInput.split('-').reverse());
                console.log(props.filmToAdd.current, dmyInput.split('-').reverse());
            }}>
                <input type="date" defaultValue={currentDMY} max={currentDMY}/><br/>
                <button type="submit">Add to diary</button>
            </form>
        </div>
    )
}