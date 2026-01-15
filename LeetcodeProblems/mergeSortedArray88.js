// their are 3 ways to solve this problem
// 1. copy all the element from nums2 to nums1 and then sort the nums1 -> complexcity =  O(m+n log m+n)
// 2. Used extra space like below -> complexcity = O(m+n) with space complexcity = O(m)

// 1 . way
// var merge = function (nums1, m, nums2, n) {
//     const nums1Copy = [...nums1.slice(0, m)];
//     let i1 = 0;
//     let i2 = 0;
//     let i = 0;

//     while (i1 < m && i2 < n) {
//         if (nums1Copy[i1] < nums2[i2]) {
//             nums1[i] = nums1Copy[i1];
//             i1++
//         } else {
//             nums1[i] = nums2[i2];
//             i2++
//         }
//         i++;
//     }

//     if (i1 !== m) {
//         while (i1 < m) {
//             nums1[i] = nums1Copy[i1];
//             i++;
//             i1++;
//         }
//     } else {
//          while (i2 < n) {
//             nums1[i] = nums2[i2];
//             i++;
//             i2++;
//         }
//     }

//     console.log(nums1);
// };

const arr1 = [1,2,3,0,0,0];
const arr2 = [2,5,6];

// merge(arr1, 3, arr2, 3);
// // 2. way

// function merge2Way(nums1, m, nums2, n) {
//     const nums1Copy = [...nums1.slice(0, m)];
//     let i1 = 0;
//     let i2 = 0;
//     for (let i = 0; i < m + n; i++){
//         if (i2 >= n || (i1 < m && nums1Copy[i1] < nums2[i2])) {
//             nums1[i] = nums1Copy[i1];
//             i1++;
//         }else{
//             nums1[i] = nums2[i2];
//             i2++;
//         }
//     }
// }

// 3.  Without the space

function mergeWithoutSpace(nums1, m, nums2, n) {
    let i1 = m - 1;
    let i2 = n - 1;
    for (let i = (m + n - 1); i >= 0; i--){
        if (i2 < 0) break;
        if (i1 >=0 && nums1[i1] > nums2[i2]) {
            nums1[i] = nums1[i1];
            i1--;
        } else {
            nums1[i] = nums2[i2];
            i2--;
        }
    }
    console.log("without extra space", nums1);
}

mergeWithoutSpace(arr1, 3, arr2, 3);