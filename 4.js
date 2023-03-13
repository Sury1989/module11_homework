
function getUser (a, b) {
    let i = setInterval (() => {
        console.log (a++);
        if (a > b) clearInterval (i);
    }, 1000)
}

getUser (5,15);