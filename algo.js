// 3162. Find the Number of Good Pairs 1



// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.





/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    

    let GoodPairs = 0

    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){

            let sum = nums2[j] * k

            if(nums1[i] % sum == 0){
                GoodPairs ++
            }
        }
    }

    return GoodPairs
};