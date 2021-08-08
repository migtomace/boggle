class DictionaryTrie {

    //constructor for DictionaryTrie
    constructor(words = []) {

        //variables
        this.word = null; // String word
        this.children = {}; // Each character

        for (let word of words){
            let node = this;
            for (let char of word) {
                if (!node.children[char])
                    node.children[char] = new DictionaryTrie();
                node = node.children[char];
            }
            node.word = word;
        }
    }
}

const findWords = (matrix, L) => {

    const res = [];
    const trie = new DictionaryTrie(L);

    //Depth first search
    const dfs = (row, col, trie) => {

        if (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1) return; // Checks the boundaries before preceding

        const char = matrix[row][col];
        trie = trie.children[char];
        if (char === 0 || !trie) return;

        if (trie.word) {
            res.push(trie.word);
            trie.word = null;
        }

        matrix[row][col] = 0;

        //horizontal searches
        dfs(row - 1, col, trie); //search down
        dfs(row + 1, col, trie); //search up
        dfs(row, col - 1, trie); //search left
        dfs(row, col + 1, trie); //search right

        //diagonal searches
        dfs(row + 1, col + 1, trie); //search up & right
        dfs(row + 1, col - 1, trie); //search up & left
        dfs(row - 1, col + 1, trie); //search down & right
        dfs(row - 1, col - 1, trie); //search down & left
        matrix[row][col] = char;
    };

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) dfs(row, col, trie); // For each cell run dfs
    }

    return res;
};

export default findWords;