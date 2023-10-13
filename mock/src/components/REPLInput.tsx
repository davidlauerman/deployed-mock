import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { Line } from "./Line";
import { Load_CSV } from "./load";
import { Table } from "./Table";

interface REPLInputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  addToHistory: (newHistory: []) => void;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Remember: let React manage state in your webapp.
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  // TODO WITH TA : add a count state
  const [count, setCount] = useState<number>(0);
  // manages whether responsed are verbose / brief
  const [isVerbose, setVerbose] = useState<boolean>(false);
  //manages the shared filepath between load/search/view
  //we choose filepath because we would still be making calls to the API to view
  const [filepath, setFilepath] = useState<string>("");

  // TODO WITH TA: build a handleSubmit function called in button onClick
  // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
  // add to it with new commands.

  function handleSubmit (commandString:string) {
    let divider = "------"
    let response = <Line text="Not a recognized function. Try again!"></Line>
    const argArray = responseParser(commandString)
    //check for mode function, get response
    //is there a better way to check than just ==?
    if (commandString === "mode") {
      setVerbose(!isVerbose)
      response = <Line text="Changed mode!"></Line>
    }
    //check for load function, get response
    if (argArray[0] === "load_csv") {
      response = <Load_CSV newFilepath={argArray[1]} setFilepath={setFilepath}/>
    }
    //check for view function, get response
    //check for search function, get response
    //if none of the above functions, get failure response
    //maybe this should be in 
  
    const newHistory = []
    newHistory.push(<Line text={divider}></Line>)
    if (isVerbose) {
      //we need to add these lines for every Verbose output
      newHistory.push(<Line text={"Command: " + commandString}></Line>)
      newHistory.push(<Line text={"Output: "}></Line>)
    } 
    newHistory.push(response)
    props.addToHistory(newHistory)

  }

  function responseParser (commandString: string) {
    const returnArray = commandString.split(" ")
    return returnArray;
  }

  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          handleSubmit(commandString)
          //props.addToHistory(commandString);
        }}
      >
        Clicked {count} times!
      </button>
    </div>
  );
}
