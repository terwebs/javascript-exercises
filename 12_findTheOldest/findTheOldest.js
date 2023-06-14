const findTheOldest = function(people) {
   return people.reduce((oldest, currentPerson) => {
    if(checkAge(oldest) > checkAge(currentPerson)){
     return oldest
    } else {
     return currentPerson
    }
 })
};

const checkAge = function(person){
    let age = 0;
    const currentYear = new Date().getFullYear()
    if(!person.yearOfDeath){
        age = currentYear - person.yearOfBirth
    } else {
        age = person.yearOfDeath - person.yearOfBirth;
    }
    return age
}

// Do not edit below this line
module.exports = findTheOldest;
