class Node {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }   
}

class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let root = this.root;
        for(const w of word) {
            if(!root.children.has(w)) {
                return false;
            }
            root = root.children.get(w);
        }
        return root.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let root = this.root;
        for(const w of prefix) {
            if(!root.children.has(w)) {
                return false;
            }
            root = root.children.get(w);
        }
        return true;
    }
}
