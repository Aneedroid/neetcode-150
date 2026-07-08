class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, [[timestamp, value]]);
        } else {
            this.keyStore.get(key).push([timestamp, value]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return '';
        const nums = this.keyStore.get(key); // [timestamp, value]
        let l = 0;
        let r = nums.length - 1;
        
        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            if(nums[m][0] === timestamp) {
                return nums[m][1];
            }

            if(nums[m][0] < timestamp) {
                // Go right
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return r >= 0 ? nums[r][1] : '';
    }
}
