interface TableProps {
    //2d array for the CSV
    array : [][];
    //boolean representing whether or not something has headers
    headers: boolean;
}

export function Table(props : TableProps) {
    //we'll highlight the header row if it had headers, if not, we don't care
    if (props.headers) {
        //get everything but the header row
        const noHeaders = props.array.slice(1)
        //make a table with seperate headers from the meat of the csv
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
    //if not headers, then we can just make a normal csv
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

//header creator makes the th objects we need for the header row, which is why it's separate
function headerCreator(headerRow: []) {
    //for every item in the first row, we'll make a th item for it
    const headers = headerRow.map(function (item, i) {
        return (
            <th key={i}> {item} </th>
        );
    })
    return headers;
}

function tableCreator(array : [][], offset : number) {
    //we iterate over rows and then every item in the rows
    const rows = array.map(function (item, i){
        const entry = item.map(function (element, j) {
            //every item in each row gets the <td> tags
            return ( 
                <td key={j}> {element} </td>
                );
        });
        //we have to account for the fact that the first row might not actually be the first row in the table
        //though i'm going to be honest. i'm not sure if that's necessary
        return (
            <tr key={i + offset}> {entry} </tr>
         );
    });
    return rows;
}
