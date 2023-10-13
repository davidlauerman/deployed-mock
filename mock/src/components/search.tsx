import { Table } from "./Table";
import { getData } from "./mockedJson";

interface searchProps {
  file: string;
  target: string;
  column: string;
}

export function Search_CSV({ file, target, column }: searchProps) {
  // return whatever file you like
  return <Table array={[getData(file, false)[0]]} headers={false}></Table>;
}
