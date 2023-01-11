/*
let num1 = +prompt("num1")
let num2 = +prompt("num2")

if((num1 % (num2**2))===0){
    while(num1>1) {
        x=num1/(num2**2)
    console.log(x.toString(2))
    break;
    }
    
}

else{
    console.log('Sert dogru deyil')
}
*/














/*

      let string = prompt('Enter a string: ');
     let len = string.length;

 
    for (let i = 0; i < len / 2; i++) {

    
        if (string[i] !== string[len - 1 - i]) {
            console.log('Polindrom deyil!');
            break;
        }

        else{
            console.log('Polindromdur!');
            break;
        
        }
    }
    

*/














/*
let string = prompt('Enter a string: ');
let rept =string.replaceAll(/a|e|u/gi, '*')

console.log(rept);

*/








/*

let num1 = prompt('Enter a first positive integer: ');
let num2 = prompt('Enter a second positive integer: ');

let min = (num1 > num2) ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`ƏKOB ${min}`);
        break;
    }
    min++;
  


}

while(num1 != num2){
    if(num1 > num2) {
        num1 -= num2;
    }
    else {
        num2 -= num1;
    }
}


console.log( `ƏBOB ${num1}`);


*/

















/*

let tem= +prompt('Zehmet olmasa tepmereturu ℃ ile daxil edin')
let far=(9/5*tem)+32
let kel=tem+273.15
console.log(`Tempratur ${tem} ℃, ${far}F ve ${kel}K-dir. `)

*/














/*

let letter=prompt('Enter a string: ')
let array=letter.split(" ")
L = [ "o"];

const out = array.filter(el => {
  let count = 0;
  el.split('').forEach(letter => {
    if(L[count] === letter) { count++; }
  });
  
  return count === L.length;
});

let outT=out.join(' ')

console.log(outT);
*/
