const fibonacci = function(count) {
    let num1 = 0;
    let num2 = 1;
    let temp = 0;
    if (parseInt(count) < 0) {
        return "OOPS"
    }
    for (let i = 1; i <= parseInt(count); i++){
        temp = num1 + num2;
        num1 = num2;
        num2 = temp
    }
    return num1
    //starting sequence in 1 instead of 0
};

// Do not edit below this line
module.exports = fibonacci;
