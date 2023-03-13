
function getPrime (num) {

  let _true = 'простое число' , _false = 'не верно';

  if (num <= 1 && num > 1000)
    return _false;

  if (num == 0)
    return _false;

  if ( num ==2)
    return _true;

    for (let i = 2; i <= num / 2; i++) {
        return _false;
    }
    return _true;
}

console.log(getPrime(3));
