import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { Line } from "./Line";
import { Load_CSV } from "./load";
import { Search_CSV } from "./search";
import { View_CSV } from "./view";

/**
 * Second level component which deals with the command inputs and distributes them down one level
 */
interface REPLInputProps {
  addToHistory: (newHistory: []) => void;
}

export function REPLInput(props: REPLInputProps) {
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  // manages whether responsed are verbose / brief
  const [isVerbose, setVerbose] = useState<boolean>(false);
  //manages the shared filepath between load/search/view
  //we choose filepath because we would still be making calls to the API to view
  const [filepath, setFilepath] = useState<string>("");

  function handleSubmit(commandString: string) {
    let divider = "------";
    //if none, get failure response
    let response = <Line text="Not a recognized function. Try again!"></Line>;
    const argArray = responseParser(commandString);
    //check for mode function, get response
    if (commandString === "mode") {
      setVerbose(!isVerbose);
      response = <Line text="Changed mode!"></Line>;
    }
    //check for load function, get response
    if (argArray[0] === "load_file") {
      response = (
        <Load_CSV newFilepath={argArray[1]} setFilepath={setFilepath} />
      );
    }
    //check for view function, get response
    if (argArray[0] === "view") {
      response = <View_CSV file={filepath} />;
    }
    //check for search function, get response
    if (argArray[0] === "search") {
      response = (
        <Search_CSV file={filepath} target={argArray[1]} column={argArray[2]} />
      );
    }

    // assembles our response if we are in verbose mode
    const newHistory = [];
    newHistory.push(<Line text={divider}></Line>);
    if (isVerbose) {
      //we need to add these lines for every Verbose output
      newHistory.push(<Line text={"Command: " + commandString}></Line>);
      newHistory.push(<Line text={"Output: "}></Line>);
    }
    newHistory.push(response);
    props.addToHistory(newHistory);
  }

  function responseParser(commandString: string) {
    const returnArray = commandString.split(" ");
    return returnArray;
  }

  return (
    <div className="repl-input">
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          handleSubmit(commandString);
          //props.addToHistory(commandString);
        }}
      >
        Clicked {count} times!
      </button>
    </div>
  );
}
