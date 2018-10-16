const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));


const user = {
    name: 'Cort',
    cities: ['Taiwan', 'Tahiti', 'Port of You'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [ 4, 7, 8],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());