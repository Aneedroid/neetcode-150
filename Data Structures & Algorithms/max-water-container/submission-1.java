class Solution {
    public int maxArea(int[] heights) {
        int area = 0;
        int j= heights.length -1;
        int i=0;
        while(i<j) {
            int maxArea = (j-i) * Math.min(heights[i], heights[j]);
            if(area < maxArea) {
                area = maxArea;
            }
            if(heights[j] < heights[i]){
                j--;
            } else {
                i++;
            }
        }
        return area;
    }
}
