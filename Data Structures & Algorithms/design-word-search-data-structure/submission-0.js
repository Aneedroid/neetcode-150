class Node {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let root = this.root;
        for(const w of word) {
            if(!root.children.has(w)) {
                root.children.set(w, new Node());
            }
            root = root.children.get(w);
        }
        root.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (curr, i) => {
            for(let j = i; j < word.length; j++) {
                if(word[j] === '.') {
                    let children = [...curr.children.values()];
                    for(let child of children) {
                        if(dfs(child, j + 1)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if(!curr.children.has(word[j])) {
                        return false;
                    }
                    curr = curr.children.get(word[j]);
                }
            }
            return curr.endOfWord;
        }
        return dfs(this.root, 0);
    }
}
