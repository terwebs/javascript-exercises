const palindromes = function (word) {
    const arrayWord = word.toLowerCase().replace(/[^a-z]/g, "").split("");
    for (let i=0; i <= arrayWord.length; i++){
        //console.log(arrayWord[i], arrayWord[arrayWord.length-(i+1)])
        if(arrayWord[i] != arrayWord[arrayWord.length-(i+1)]){
            return false
        }
    } return true;
};

// Do not edit below this line
module.exports = palindromes;
