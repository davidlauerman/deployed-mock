import "../styles/main.css";

export function getData(file: string): string[][] {
  if (file === "fileInt") {
    // If input matches 'string1', return the first predetermined array.
    return [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
  } else if (file === "fileTxt") {
    // If input matches 'string2', return the second predetermined array.
    return [
      ["Apple", "Banana", "Cherry"],
      ["Dog", "Elephant", "Fox"],
      ["A", "B", "C"],
      ["1", "2", "34"],
      ["lorem", "ipsum, dolor", "sit, amit!"],
    ];
  } else if (file === "fileRnd") {
    // If input matches 'string3', return the third predetermined array.
    return getRandomArray(5, 5);
  } else {
    // If input doesn't match any of the predetermined strings, return null or perform another action.
    return [["Wrong"]];
  }
}

// // Function to generate a random 2D array of strings
function getRandomArray(rows: number, cols: number): string[][] {
  const randomArray: string[][] = [];
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < rows; i++) {
    const row: string[] = [];
    for (let j = 0; j < cols; j++) {
      let randomString = "";
      for (let k = 0; k < 1 * Math.random(); k++) {
        const randomCharIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomCharIndex);
      }
      row.push(randomString);
    }
    randomArray.push(row);
  }
  return randomArray;
}

// // Function to return a 2D array of integers
// function getIntegers(): number[][] {
//   return [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// }

// // Function to return a 2D array of strings
// function getStrings(): string[][] {
//   return [
//     ["Apple", "Banana", "Cherry"],
//     ["Dog", "Elephant", "Fox"],
//     ["A", "B", "C"],
//     ["1", "2", "34"],
//     ["lorem", "ipsum, dolor", "sit, amit!"],
//   ];
// }

// export { getIntegers, getStrings, getRandomArray };

// export function DataLoader({ filePath }) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const loadData = async () => {
//         //setData(map.filePath)

//     };
//     loadData();
//   }, [filePath]);

//   if (data) {
//     return (
//       <div>
//         <h2>Data Loaded from {filePath}</h2>
//         <pre>{data}</pre>
//       </div>
//     );
//   } else {
//     return <div> Wrong </div>;
//   }
// }
