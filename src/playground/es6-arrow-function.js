function square (x) {
    return x * x;
}

console.log(square(3));

/* const squareArrow = (x) => {
    return x * x;
} */

const squareArrow =(x) => x * x;

console.log(squareArrow(4));


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Cort Yonder'));

const getFirstName2 = (fullName2) => fullName2.split(' ')[0];

console.log(getFirstName2('Cort Yonder'));
