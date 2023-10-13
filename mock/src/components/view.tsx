import { Table } from "./Table";
import { getData } from "./mockedJson";

interface viewProps {
  file: string;
  //not sure if you have to do this for things that are shared state
}

export function View_CSV({ file }: viewProps) {
  // return whatever file you like
  console.log(file);
  return <Table array={getData(file, false)} headers={false}></Table>;
}
