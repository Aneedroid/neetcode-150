class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;
        // Formula to calculate: Min(leftMax, rightMax) - height[i]
        // Why it can work without other boundary
        // For sure we're considering the lowest one.
        // Which means, other side will absolutely be greated and since we require only
        // min of both, we can get ahead with this.

        while(l < r) {
            if(leftMax <= rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += (leftMax - height[l]);
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += (rightMax - height[r]);
            }
        }

        return res;
    }
}
