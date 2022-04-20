import './styles.css';

type CardProps = {
    name: string
    time: Date
}

export function Card({ name, time }: CardProps) {
    return (
        <div id="card">
            <strong>{name}</strong>
            <small>{time.toLocaleDateString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })}</small>
        </div>
    )
}