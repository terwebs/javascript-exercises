const reverseString = function(string) {
    let stringMax = string.length - 1;
    let reverseString = "";
    for (let i= stringMax; i >= 0; i --){
        reverseString += string[i]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
