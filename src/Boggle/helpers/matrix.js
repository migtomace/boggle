import alphabet from './alphabet.json';

const letter = () => {
    let alpha = alphabet;
    return alpha[Math.floor(Math.random() * alpha.length)];
}

const matrix = () => {
    let matrix = Array.from(Array(4), () => new Array(4).fill(0));

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            matrix[i][j] = letter();
        }
    }

    return matrix;
}

export default matrix();