import "../styles/main.css";
import { useState, useEffect } from "react";

// Function to return a 2D array of integers
function getIntegers(): number[][] {
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
}

// Function to return a 2D array of strings
function getStrings(): string[][] {
  return [
    ["Apple", "Banana", "Cherry"],
    ["Dog", "Elephant", "Fox"],
    ["A", "B", "C"],
    ["1", "2", "34"],
    ["lorem", "ipsum, dolor", "sit, amit!"],
  ];
}

// Function to generate a random 2D array of strings
function getRandomArray(
  rows: number,
  cols: number,
  stringLength: number
): string[][] {
  const randomArray: string[][] = [];
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < rows; i++) {
    const row: string[] = [];
    for (let j = 0; j < cols; j++) {
      let randomString = "";
      for (let k = 0; k < stringLength; k++) {
        const randomCharIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomCharIndex);
      }
      row.push(randomString);
    }
    randomArray.push(row);
  }
  return randomArray;
}

export { getIntegers, getStrings, getRandomArray };

// export function DataLoader({ filePath }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await fetch(filePath); // Load the JSON data using the provided file path
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData); // Set the data based on the loaded JSON
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error loading data:", error);
//       }
//     };

//     loadData();
//   }, [filePath]);

//   if (data) {
//     return (
//       <div>
//         <h2>Data Loaded from {filePath}</h2>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     );
//   } else {
//     return <div> Wrong </div>;
//   }
// }
