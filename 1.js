
function getNumber() {


const resalt = +prompt ('Введите число')
if (typeof +resalt !== 'number') {
    alert ('Упс, кажется вы ошиблись')
} 

else if (isNaN (resalt % 2)) {
alert ('Ошибка, введено не число')
}

else if (resalt % 2 === 0) {
    alert ('Число четное')
}

else ('Число нечетное')

}

getNumber();