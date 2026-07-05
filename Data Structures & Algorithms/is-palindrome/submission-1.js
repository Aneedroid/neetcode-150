class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNumRegEx = new RegExp("[^a-zA-Z0-9]", "g");
        const str = s.toLowerCase().replace(alphaNumRegEx, "");
        let a = 0;
        let b = str.length - 1;
        while(a < b) {
            if(str.charAt(a) !== str.charAt(b)) {
                return false;
            }
            a++;
            b--;
        }
        return true;
    }
}
