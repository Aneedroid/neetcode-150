class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Gotta do binary search on min len
        const a = nums1.length <= nums2.length ? nums1 : nums2;
        const b = nums1.length <= nums2.length ? nums2 : nums1;

        // A , b
        const totalLen = a.length + b.length;
        const half = Math.floor((totalLen + 1) / 2);
        // Bin Search on A
        let l = 0;
        let r = a.length;
        console.log('A: ', a);
        console.log('B: ', b);


        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            console.log('l, m, r: ', l, m, r);
            
            const aLeft = m > 0 ? a[m - 1] : -Infinity;
            const aRight = m < a.length ? a[m] : Infinity;
            const bLeft = half - m - 1 >= 0 ? b[half - m - 1] : -Infinity;
            const bRight = half - m < b.length ? b[half - m]: Infinity;
            console.log('aLeft, aRight: ', aLeft, aRight);
            console.log('bLeft, bRight: ', bLeft, bRight);

            if(aLeft <= bRight && bLeft <= aRight) {
                // Good partition;
                if(totalLen % 2 === 0) {
                    // Even Len
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                } else {
                    return Math.max(aLeft, bLeft);
                }
            } else if (bLeft > aRight) {
                console.log('matched here illati?')
                l = m + 1;
            } else if(aLeft > bRight) {
                console.log('matched here?')
                r = m - 1;
            }
        }
    }
}
