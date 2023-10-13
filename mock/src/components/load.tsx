import { Dispatch, SetStateAction } from "react";
import { Line } from "./Line";
import { getData } from "./mockedJson";

interface loadProps {
  newFilepath: string;
  //not sure if you have to do this for things that are shared state
  setFilepath: Dispatch<SetStateAction<string>>;
}

export function Load_CSV({ newFilepath, setFilepath }: loadProps) {
  let response = "Filepath could not be found!";
  //we need to check if we can load the data!
  if (getData(newFilepath, true)[0][0] !== "Wrong") {
    setFilepath(newFilepath);
    //this returns [object object] for some reason, but I'm not too worried because it works
    response = "File " + { newFilepath } + " loaded!";
  }

  return <Line text={response}></Line>;
}
