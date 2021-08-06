import React from 'react';
import matrix from './matrix';
import words from './words.json'

const L = words;

const foundWords = [];

// A recursive function to print all words present on boggle
const findWordsUtil = (matrix, visited, i, j, word) =>
{

    // Mark current cell as visited and
    // append current character to str
    visited[i][j] = true;
    word = word + matrix[i][j];

    for (let i = 0; i < L.length; i++){
        if (L[i] === word) {
            foundWords.push(word);
            L.splice(i, 1);
        }
    }


    // Traverse 8 adjacent cells of boggle[i,j]
    for (let row = i - 1; row <= i + 1 && row < 4; row++)
        for (let col = j - 1; col <= j + 1 && col < 4; col++)
            if (row >= 0 && col >= 0 && !visited[row][col])
                findWordsUtil(matrix, visited, row, col, word);

    // Erase current character from string and
    // mark visited of current cell as false
    visited[i][j] = false;
}

// Prints all words present in dictionary.
const findWords = (matrix) =>
{
    // Mark all characters as not visited
    let visited = Array.from(Array(4), () => new Array(4).fill(0));

    // Initialize current string
    let word = "";

    // Consider every character and look for all words
    // starting with this character
    for (let i = 0; i < 4; i++) //rows
        for (let j = 0; j < 4; j++) //cols
            findWordsUtil(matrix, visited, i, j, word);
}


export const Boggle = () => {

    findWords(matrix);

    return (
        <div>
            <h1>Matrix</h1>
            <table className=matrix>
                <thead>
                <tr>
                    {matrix[0].map((item, index) => {
                        return <td>{item}</td>;
                    })}
                </tr>
                </thead>
                <tbody>
                {matrix.slice(1, matrix.length).map((item, index) => {
                    return (
                        <tr>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <br/>
            <h1>Dictionary</h1>
            <ul>
                {L.map((item, index) => {
                    return <li> {item} </li>
                })}
            </ul>

            <br/>
            <h1>Found these words:</h1>
            <p>{foundWords.join(", ")}</p>


        </div>
    )

}