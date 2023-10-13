import { Table } from "./Table";
import { getData } from "./mockedJson";

interface viewProps {
  file: string;
  //not sure if you have to do this for things that are shared state
}

/**
 * Handles the view request
 * @param param0 - takes in the file path that we maintain
 * @returns - assembled table object response
 */
export function View_CSV({ file }: viewProps) {
  return <Table array={getData(file)} headers={false}></Table>;
}
