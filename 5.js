
const getNumber = (x) => {
    return function (n) {
        return x * n; 
    };
}

let a = getNumber ();


console.log (getNumber (1)(2), );

