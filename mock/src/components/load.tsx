import { Dispatch, SetStateAction } from "react";
import { Line } from "./Line"

interface loadProps {
    newFilepath: string;
    //not sure if you have to do this for things that are shared state
    setFilepath: Dispatch<SetStateAction<string>>;
}

export function Load_CSV({newFilepath, setFilepath} : loadProps) {
    let response = 'Filepath could not be found!'
    //we need to check if we can load the data!
    //if (load_data !== false) {
        //setFilepath(newFilepath)
        //response = "File" + {filepath} + " loaded!"
    //}

    return <Line text={response}></Line>
}