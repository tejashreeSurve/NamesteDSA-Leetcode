
function findMedianSortedArrays(arr1, arr2) {
        let n1 = arr1.length;
    let n2 = arr2.length;
    if (n1 > n2) {
        return findMedianSortedArrays(arr2, arr1);;
    }
    let left = Math.floor((n1 + n2 + 1) / 2);
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        let l1 = -Infinity, l2 = -Infinity;
        let r1 = Infinity, r2 = Infinity;
        if (mid1 < n1) r1 = arr1[mid1];
        if (mid2 < n2) r2 = arr2[mid2];
        if ((mid1 - 1) >= 0) l1 = arr1[mid1 - 1];
        if ((mid2 - 1) >= 0) l2 = arr2[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if ((n1 + n2) % 2 === 0) {
                return ((Math.max(l1, l2) + Math.min(r1, r2)) / 2);
            } else{ 
                return Math.max(l1, l2);
            }    
        } else if (l1 > r2 ) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
    
}

findMedianSortedArrays([0, 0], [0, 0]);


function second(arr1, arr2) {
    let n1 = arr1.length;
    let n2 = arr2.length;
    if (n1 > n2) {
        return second(n2, n1);
    }
    let left = Math.floor((n1 + n1 + 1) / 2);
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;

        let l1 = -Infinity, l2 = -Infinity;
        let r1 = Infinity, r2 = Infinity;

        if (mid1 < n1) r1 = arr1[mid1];
        if (mid2 < n2) r2 = arr2[mid2]; 
        if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(l1, l1) + Math.min(r1, r2)) / 2;
            } else {
                return Math.max(l1, l1);
            }
        } else if (l1 > r2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
}