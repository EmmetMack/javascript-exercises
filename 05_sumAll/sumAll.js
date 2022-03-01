const sumAll = function(start, end) {
    //loop through all the values then add them up
    if (typeof(start) != 'number' || typeof(end) != 'number' || start < 0 || end < 0) {
        return 'ERROR'
    }
    let beginning = start < end ? start : end;
    let finish = end > start ? end : start;
    let sum = 0;
    for (let i = beginning; i <= finish; i ++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
