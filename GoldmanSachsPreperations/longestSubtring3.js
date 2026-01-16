

// complexcity = O(n)
function longestSubString(s) {
    let x = 0;
    let set = new Set();
    let max = 0;
    for (let i = 0; i < s.length; i++){
        while (set.has(s[i])) {
            set.delete(s[x]);
            x++;
        }
        set.add(s[i]);
        max = Math.max(max, set.size);
    }

    return max;
}


// need to check

var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }

        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};