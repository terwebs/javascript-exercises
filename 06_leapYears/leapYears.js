const leapYears = function(year) {
    if (year % 4 === 0){
        console.log(`${year} % 4`, year % 4)
        if (year % 100 === 0){
            if (year % 400 === 0){
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }  else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

leapYears(1996)