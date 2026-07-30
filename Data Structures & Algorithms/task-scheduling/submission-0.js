class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);
        for(let i = 0; i < tasks.length; i++) {
            count[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
        }
        const mpq = new MaxPriorityQueue();
        count.forEach(c => c ? mpq.enqueue(c) : null);

        const q = []; // [new freq, availableTime]
        let time = 0;

        while(mpq.size() > 0 || q.length > 0) {
            time += 1;

            // Now get max freq and reduce it
            if(mpq.size() > 0) {
                let cnt = mpq.pop() - 1;
                if(cnt !== 0) q.unshift([cnt, time + n]);
            }

            if(q.length > 0 && q[q.length - 1][1] === time) {
                mpq.push(q.pop()[0]);
            }
        }
        return time;
    }
}
