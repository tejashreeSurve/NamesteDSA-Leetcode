/**
 * 
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

 */


// brute force algo
// time complexcity= O(n2) = O(nxn)
// space complexcity = O(1)

function maxA(height) {
    let max = 0;
    for (let i = 0; i < height.length-1; i++){
        for (let j = i + 1; j < height.length; j++){
            let area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(area, max);
        }
    }

    return max;
}


console.log(maxA([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// time complexcity = O(n)
// space complexcity = O(1)
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let max = 0;
    while(i<j){
        let area = (j-i)*Math.min(height[i], height[j]);
        max = Math.max(area, max);

        if(height[i] < height[j]){
            i++;
        }else{
            j--;
        }
    }

    return max;
};