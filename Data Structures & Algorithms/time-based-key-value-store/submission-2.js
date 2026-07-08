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
        // console.log('Set Key, Value, Timestamp: ', key, value, timestamp);
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, [[timestamp, value]]);
        } else {
            this.keyStore.get(key).push([timestamp, value]);
        }
        // console.log('KeyStore after set: ', this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // console.log('Get called key, timestamp: ', key, timestamp);
        if(!this.keyStore.has(key)) return '';
        const nums = this.keyStore.get(key); // [timestamp, value]
        // console.log('nums: ', nums);
        let l = 0;
        let r = nums.length - 1;
        let m;
        while(l <= r) {
            m = Math.floor((l + r) / 2);
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

        // console.log('r: ', r);
        return r >= 0 ? nums[r][1] : '';
    }
}
