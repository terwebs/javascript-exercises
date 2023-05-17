const removeFromArray = function(items, ...numbers) {
    for (let number of numbers){
        for (let item of items){
            // console.log(` ${item} = ${number}`, item === number)
            if (item === number){
                const index = (items.indexOf(item))
                items.splice(index, 1)
            }
           
        }
    }
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
// removeFromArray([1, 2, 3], "1", 3)





