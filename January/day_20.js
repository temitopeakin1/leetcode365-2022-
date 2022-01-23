
// 875. Koko Eating Bananas
// Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.
// // Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// // Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// // Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// // Return the minimum integer k such that she can eat all the bananas within h hours.

 

// // Example 1:

// // Input: piles = [3,6,7,11], h = 8
// // Output: 4
// // Example 2:

// // Input: piles = [30,11,23,4,20], h = 5
// // Output: 30
// // Example 3:

// // Input: piles = [30,11,23,4,20], h = 6
// // Output: 23
 

// // Constraints:

// // 1 <= piles.length <= 104
// // piles.length <= h <= 109
// // 1 <= piles[i] <= 109


//solution  1

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 const minEatingSpeed = (piles, h) => {
    let min = 1,
        max = Math.max(...piles),
        best = max

    const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)

    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
		
        if (time(mid) <= h) {
            best = mid
            max = mid - 1
        } else
            min = mid + 1
    }

    return best
}


// solution 2

var minEatingSpeed = function(piles, H) {
    let count = 0;
    let maxRate = 0; 
    let minRate = 0; 
    
    for (num of piles) {
        if (num > maxRate) maxRate = num;
        count += num;
    }

    while (minRate < maxRate) {
      let midRate = Math.floor((maxRate + minRate) / 2); // 15
      if (!checkHours(midRate)) {
          minRate = midRate + 1;
      } else {
          maxRate = midRate;
      }
    };

    return minRate;

    function checkHours(rate) {
        let total = 0;
        for (let i = 0; i < piles.length; i++) {
            total += Math.ceil(piles[i] / rate);
        };
        return total <= H;
    };
};