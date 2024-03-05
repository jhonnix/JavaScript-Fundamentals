
const fruits = ["apple", "banana", "cherry"];

const set = fruits.filter(function(item){
    console.log("item:" + item);
    return item > 'banna';
});

console.log(set);