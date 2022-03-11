const fibonacci = function(n) {
    //brainfarted the algo, got help from here: https://eskeype.github.io/2018/04/20/7-Fibonacci-Algorithms/
    if (n < 0) { return "OOPS"};
    let curr = 0;
    let next = 1;
    for (let i = 0; i < n; i++) {
        let newNum = next + curr;
        curr = next;
        next = newNum;
    }

    return curr;
    
};

// Do not edit below this line
module.exports = fibonacci;
