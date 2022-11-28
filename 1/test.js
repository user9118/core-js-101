// class Animals {
//  #someProp = '№';
//  /**метод 1 обязательный**/
//  constructor(/**переменная1, переменная2**/name, color){
//    this.name = name;
//    this.color = color;
//  /**метод 2**/
//  };
//  //constructor(/**переменная1, переменная2**/name, color){
//  //  this.type = name;
//  //  this.number = color;
//  ///**метод 2**/
//  //};
//  //constructor(/**переменная1, переменная2**/name, color){
//  //  this.a = name;
//  //  this.b = color;
//  ///**метод 2**/
//  //};
//  //constructor(/**переменная1, переменная2**/name, color){
//  //  this.c = name;
//  //  this.x = color;
//  ///**метод 2**/
//  //};
//  display() {
//    console.log(`${this.name} имеет окрас ${this.color}`)
//  };
//  static someProp = 'someProp';
// }

// const cat = new Animals('manul', 'black');
// //const Animals = class {

// //}
// class Animal {
//  /**метод 1 обязательный**/
//  //constructor(/**переменная1, переменная2**/name, color){
//  //  this.name = name;
//  //  this.color = color;
//  /**метод 2**/
//  //};
//  display() {
//    console.log(`${this.name} имеет окрас ${this.color}`)
//  };
// }
// const cats = new Animal('manul', 'black');

// function extractNameFromTemplate(value) {
//  console.log(value.replace('Hello, ', ''));
//  return value.replace('Hello, ', '');
// }
// function removeFirstOccurrences(str, value) {
//  console.log(str.replace(value, ''));
//  return str.replace(value, '')
// }
// removeFirstOccurrences('ABABAB','BA')


// function extractEmails(str) {
//  console.log(str.split(';'))
//  return str.split(';')
// }
// extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com')

//function getRectangleString(width, height) {
//  let str = '';
//  for (let i = 0; i < height; i++) {
//    if (i == 0) {
//      for (let j = 0; j < width; j++) {
//        if (j == 0) {
//          str += '┌';
//        } else if (j == width - 1) {
//          str += '┐\n';
//        } else {
//          str += '─';
//        }
//      }
//    } else if (i == height - 1) {
//      for (let j = 0; j < width; j++) {
//        if (j == 0) {
//          str += '└';
//        } else if (j == width - 1) {
//          str += '┘\n';
//        } else {
//          str += '─';
//        }
//      }
//    } else {
//      for (let j = 0; j < width; j++) {
//        if (j == 0) {
//          str += '│';
//        } else if (j == width - 1) {
//          str += '│\n';
//        } else {
//          str += ' ';
//        }
//      }
//    }
//  }
//  console.log(str);
//  return str;
//}



function getCardId(value) {

  const mast = value[value.length-1];
  value = value.slice(0, -1);
  let x = 0;
  if (mast === '♣') {
    x = 0;
  } else if (mast === '♦') {
    x = 12;
  } else if (mast === '♥') {
    x = 12 * 2;
  } else if (mast === '♠') {
    x = 12 * 3;
  }
  let id = 0;
  if (value === 'A') {
    id = 0;
  } else if (value === 'J') {
    id = 10;
  } else if (value === 'Q') {
    id = 11;
  } else if (value === 'K') {
    id = 12;
  } else {
    id = Number(value) - 1;
  }
  return (id + x);
}

getCardId('10♣')