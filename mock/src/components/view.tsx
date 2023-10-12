import { Table } from "./Table";
import { getData } from "./mockedJson";

export function View_CSV() {
  // return whatever file you like

  return <Table tableData={getData("fileInt")}></Table>;
}
