import alphabet from './alphabet.json';

const letter = () => {
    let alpha = alphabet;
    return alpha[Math.floor(Math.random() * alpha.length)];
}

const matrix = (mh, mw) => {
    let matrix = Array.from(Array(mh), () => new Array(mw).fill(0));

    for (let i = 0; i < mh; i++){
        for (let j = 0; j < mw; j++){
            matrix[i][j] = letter();
        }
    }

    return matrix;
}

export default matrix;