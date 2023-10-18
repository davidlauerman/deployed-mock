import "../styles/main.css";

interface REPLHistoryProps {
  history: [];
}
export function REPLHistory(props: REPLHistoryProps) {
  return <div className="repl-history">{props.history}</div>;
}
