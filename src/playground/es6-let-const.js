var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameLet', nameConst);

var fullName = 'Cort Yonder';
let firstName;

if(fullName){
    const firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName)
