interface LineProps {
    text: string;
}

export function Line(props : LineProps) {
    return <p>{props.text}</p>
}

