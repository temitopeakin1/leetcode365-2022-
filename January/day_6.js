
//  // Car Pooling


// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
 

// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105

// 1st solution
const carPooling = (trips, capacity) => {
    let onOffLog = []
    for(const [passengers, start, end] of trips)
        onOffLog.push([start, passengers], [end, -passengers])
    onOffLog.sort((a,b) => a[0] - b[0] || a[1] - b[1])
    let passengerCount = 0
    for(const [, people] of onOffLog){
        passengerCount += people
        if(passengerCount > capacity)
            return false
    }
    return true
};

// 2nd solution

var carPooling = function(trips, capacity) {
    var time = new Array(1001);
    time.fill(0, 0, 1001);
    for(var i = 0; i < trips.length; i++) {
        var people = trips[i][0];
        var start = trips[i][1];
        var end = trips[i][2] - 1;
        for (var j = start; j <= end; j++) {
            if(time[j] + people <= capacity) {
                time[j] = time[j] + people;
            } else {
                return false;
            }
        }
    }
    return true;
    
};
