import { Dispatch, SetStateAction } from "react";
import { Line } from "./Line";

interface searchProps {
  target: string;
  column: string;
}

export function Search_CSV({ target, column }: searchProps) {
  let response = "Filepath could not be found!";
  //we need to check if we can load the data!
  //if (load_data !== false) {
  //setFilepath(newFilepath)
  //response = "File" + {filepath} + " loaded!"
  //}

  return <Line text={response}></Line>;
}
