function getSum (x) {
    return function (y) {
        return x + y; 
    };
}

let a = getSum ();


console.log (getSum (1)(2), getSum (5)(8));