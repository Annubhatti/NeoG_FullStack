// Object Cloning && garbage Collector

let obj = {
    age: 12,
    wt: 68,
    height: 5
}
// we call object dynamic becauze we can change object property at run tym.

obj.color = "white";
console.log(obj);

// Object Cloning means we create new  copy of exiting obj  both have different address//

//1. using spread operator

let src = {
    age: 12,
    wt: 68,
    height: 5
} 

let dest = {...src};
src.age = 90;
console.log("src: ", src);
console.log("dest: ", dest);


//Cloning using  assign method
let desti = Object.assign({}, src);

//Cloning using iteration method 

let obj = {
    age: 12,
    wt: 50,
    ht: 180
};

let destination = {};

for(let key in obj){
    let newKey = key;
    let val = obj[key];
    // insert newkey and val in the destination and create a clone
    destination[newKey] = val;
}

// garbage Collector ->  memory in program that is no longer in use in the code can be freed using GC that prevent from meomery leak
// memory leak means - >  jo meromery free honi chahiye thi logicaly but free nhi hai
// GC always run in the background


