import "../styles/main.css";
import { useState } from "react";

export function getData(file: string, load: Boolean): string[][] {
  const [currFile, setCurrFile] = useState<string>("");

  // this happens in load, stores the new loaded file and returns it
  if (load) {
    if (file === "fileInt" || file === "fileTxt" || file === "fileRnd") {
      setCurrFile(file);
      return [[file]];
    } else {
      return [["Wrong"]];
    }
  }

  // if the file is already loaded, we are returning it
  if (currFile === "fileInt") {
    return Files.INT;
  } else if (currFile === "fileTxt") {
    return Files.TXT;
  } else if (currFile === "fileRnd") {
    return Files.RND;
  } else {
    // If input doesn't match any of the predetermined strings
    return [["Wrong"]];
  }
}

/**
 * Static helper Class that holds the data
 */
class Files {
  static RND: string[][] = getRandomArray(5, 5);
  static TXT: string[][] = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];
  static INT: string[][] = [
    ["Apple", "Banana", "Cherry"],
    ["Dog", "Elephant", "Fox"],
    ["A", "B", "C"],
    ["1", "2", "34"],
    ["lorem", "ipsum, dolor", "sit, amit!"],
  ];
}

// Function to generate a random 2D array of strings
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
// function getIntegers(): string[][] {
//   return [
//     ["1", "2", "3"],
//     ["4", "5", "6"],
//     ["7", "8", "9"],
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
