class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let root = this.root;
        for(const w of word) {
            if(!root.children.has(w)) {
                root.children.set(w, new TrieNode());
            }
            root = root.children.get(w);
        }
        root.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // Insert words into a trie
        let root = new Trie();
        for(const word of words) {
            root.insert(word);
        }
        const visited = new Set();
        const res = new Set();

        const dfs = (r, c, curr, word) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= board.length || 
                c >= board[0].length ||
                visited.has(`${r},${c}`) ||
                !curr.children.has(board[r][c])
            ) {
                return false;
            }
            visited.add(`${r},${c}`);
            curr = curr.children.get(board[r][c]);
            word += board[r][c];
            if(curr.isWord) {
                res.add(word);
            }

            dfs(r + 1, c, curr, word);
            dfs(r - 1, c, curr, word);
            dfs(r, c + 1, curr, word);
            dfs(r, c - 1, curr, word);

            visited.delete(`${r},${c}`);
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                dfs(i, j, root.root, "");
            }
        }

        return [...res];
    }
}
