const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    let i = 0;
    while (i < arr.length) {
        for (let arg of args.slice(1,args.length)){
            if (arr[i] === arg) {
                arr.splice(i, 1);
                i -= 1;
            }
        }

        i++;
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
