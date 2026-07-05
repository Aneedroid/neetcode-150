class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let a = 0;
        let b = numbers.length - 1;
        while(a < b) {
            if((numbers[a] + numbers[b]) < target) {
                a++;
            } else if((numbers[a] + numbers[b]) > target) {
                b--;
            } else {
                return [a + 1, b + 1];
            }
        }
    }
}
