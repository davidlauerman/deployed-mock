import { Table } from "./Table";
import { getData } from "./mockedJson";

interface searchProps {
  file: string;
  target: string;
  column: string;
}

/**
 * Handles search request
 * @param param0 - takes in the shared file state as well as target and column
 * nothing is currently done with the other 2 inputs, as it is a mock
 * @returns assembled table object of the response
 */
export function Search_CSV({ file, target, column }: searchProps) {
  // return whatever file you like
  return <Table array={[getData(file)[0]]} headers={false}></Table>;
}
