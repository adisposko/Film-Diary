import './FormModalInput.css';

export default function FormModalInput(props) {
    const labelText = props.id[0].toUpperCase() + props.id.slice(1).replaceAll('-', ' ');

    return(
        <>
            <label htmlFor={`${props.id}-input`}>{labelText}</label><br/>
            <input type={props.type} id={`${props.id}-input`}></input><br/>
        </>
    )
}