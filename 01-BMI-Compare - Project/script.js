let massMark =80, massJohn=90, heightMark= 1.74, heightJohn= 1.80;

let BMIJohn = massJohn/(heightJohn*heightJohn);

let BMIMark = massMark/(heightMark*heightMark);

console.log(BMIJohn)
console.log(BMIMark)

BMIJohn = Math.floor(BMIJohn);

console.log(BMIJohn)

BMIMark = Math.floor(BMIMark)

console.log(BMIMark)

Boolean 

const higherBMI = BMIJohn > BMIMark;
console.log (higherBMI)

if (BMIMark>BMIJohn) {console.log('BMIMark is higher than BMIJohn');
    
} else {
    console.log('BMIMark is lower than BMIJohn');
}
