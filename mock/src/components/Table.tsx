interface TableProps {
    //2d array for the CSV
    array : [][];
    headers: boolean;
}

export function Table(props : TableProps) {

    if (props.headers) {
        const noHeaders = props.array.slice(1)
        return (
            <table>
                <thead>
                    {headerCreator(props.array[0])}
                </thead>
                <tbody>
                    {tableCreator(noHeaders, 1)}
                </tbody>
            </table>
        );

    } else {
        return (
            <table>
                <tbody>
                    {tableCreator(props.array, 0)}
                </tbody>
            </table>
        )
    }
}

function headerCreator(headerRow: []) {
    const headers = headerRow.map(function (item, i) {
        return (
            <th key={i}> {item} </th>
        );
    })
    return headers;
}

function tableCreator(array : [][], offset : number) {
    const rows = array.map(function (item, i){
        const entry = item.map(function (element, j) {
            return ( 
                <td key={j}> {element} </td>
                );
        });
        return (
            <tr key={i + offset}> {entry} </tr>
         );
    });
    return rows;
}
