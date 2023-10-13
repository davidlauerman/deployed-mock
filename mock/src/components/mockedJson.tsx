import "../styles/main.css";
import { useState } from "react";

export function getData(file: string, load: Boolean): string[][] {
  // this happens in load, stores the new loaded file and returns it
  // if (load) {
  //   if (file === "fileInt" || file === "fileTxt" || file === "fileRnd") {
  //     return [[file]];
  //   } else {
  //     return [["Wrong"]];
  //   }
  // }

  // if the file is already loaded, we are returning it
  if (file === "fileInt") {
    return Files.INT;
  } else if (file === "fileTxt") {
    return Files.TXT;
  } else if (file === "fileRnd") {
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

// export function getData(file: string, load: Boolean): string[][] {
//   // Define your predetermined 2D arrays
//   const array1 = [
//     ["Item 1", "Item 2", "Item 3"],
//     ["Item 4", "Item 5", "Item 6"],
//   ];

//   const array2 = [
//     ["A", "B", "C"],
//     ["D", "E", "F"],
//   ];

//   const array3 = [
//     ["One", "Two"],
//     ["Three", "Four"],
//   ];

//   let selectedArray: string[][];

//   // Use conditional logic to select the array based on the input string
//   if (file === "string1") {
//     selectedArray = array1;
//   } else if (file === "string2") {
//     selectedArray = array2;
//   } else if (file === "string3") {
//     selectedArray = array3;
//   } else {
//     selectedArray = [["Wrong"]]; // Default to an empty array if the input doesn't match any predetermined string
//   }

//   return selectedArray;
// }
