interface LineProps {
  text: string;
}

/**
 * Simple line object for consistency
 * @param props takes in a line of text
 * @returns returns formatted
 */
export function Line(props: LineProps) {
  return <p>{props.text}</p>;
}
