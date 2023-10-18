import { useState } from "react";
import "../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { REPLInput } from "./REPLInput";

/* 
Top Level component 
*/
export default function REPL() {
  // state that holds the command history
  const [history, setHistory] = useState<[]>([]);

  //elements: array
  const addToHistory = (newHistory: []) => {
    setHistory([...history, ...newHistory]);
  };

  return (
    <div className="repl">
      <REPLHistory history={history} />
      <hr></hr>
      <REPLInput addToHistory={addToHistory} />
    </div>
  );
}
