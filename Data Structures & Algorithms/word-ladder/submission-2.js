class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.find(w => w === endWord)) return 0;
        // First construct the adjList
        // pattern -> words mapping to patterns;
        const adj = new Map();

        // O(m * n * n)
        for (const word of wordList) {
            // Between each index of word, wildcard it
            for (let j = 0; j < word.length; j++) {
                const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                if (adj.has(pattern)) {
                    adj.get(pattern).push(word);
                } else {
                    adj.set(pattern, [word]);
                }
            }
        }

        // Need to do BFS to reach the thing faster
        const q = new Queue([beginWord]);
        const visited = new Set();
        let res = 1;
        console.log('adj: ', adj)

        while (q.size()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                const word = q.dequeue();
                if(word === endWord) {
                    return res;
                }
                visited.add(word);
                // Find pattern for this word;
                for (let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                    console.log('pattern: ', pattern);
                    // Get neighbours for this pattern
                    const neighbours = adj.get(pattern);
                    console.log('neighbours: ', neighbours);
                    if(neighbours) {
                        for(const nei of neighbours) {
                            if(!visited.has(nei)) {
                                q.enqueue(nei);
                            }
                        }
                    }
                }
            }
            res += 1;
        }

        return 0;
    }
}
