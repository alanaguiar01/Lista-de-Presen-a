import './styles.css';

export function Card (props:string ){
    return(
        <div id="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}