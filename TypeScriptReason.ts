// Js doesn't define types that's why typescript was launched. You can't write this syntax in js file.
var aboutMe: { name: string, age: number } = {
    name: 'Preethi',
    age: 26,
  };

function fun(){
  // You can't declare this.
  // aboutMe.abc = "";
}

class Animal {
    name : string;
    type : string; 
}

var lion : Animal;

function roar(){
    lion.type = "feline";
    console.info(lion)
}
