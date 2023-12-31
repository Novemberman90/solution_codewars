/* Самостоятельное изучение JS 
Решаю практические задачи из киниги Выразительный JS */

//Задание : сколько будет 2 в степени 10
// Решение: 
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result)

/*Задание: создать ёлку из #  
Пример : 
#
##
###
####
#####
######
#######

 Моё и правльное решение*/
for (let simbol = "#"; simbol.length <= 7; simbol = simbol + "#") {
    console.log(simbol);
}

/*
Задание: 
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
 */
 // моё решение заменяет все цифры делящеися на 3 и на 5 без остатка, но не выводит остальные, а только слово ФизБаз 7 раз

for (let i = 0; i <=100 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }}

// правильное решение. выводит числа, что делятеся на 3 и 5 без остатка и остальные цифры
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      } 

      /*Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
       */
        // Моё решение. Рисует шахматную доску два ряда по 8 символов
    for (let simbol = "# # # #"; simbol.length < 8; simbol = simbol + "#") {
        console.log(simbol);
        let po = " ";
        console.log(po + simbol);
        
        let po3 = po;
        console.log(simbol);
        console.log(po3 + simbol);
    } 

    // Правильное решение 
    let size = 8;
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);


/* Задача из Rolling Scope School
  Задание: 
  Your task is to count the cats hidden in the backyard (presented by two-dimensional Array).
   Cats hide well, but their ears ("^^") are clearly visible.
   Your task is to implement the countCats(backyard) function that will count cats. Good luck!
  Number of cats found should be number. If no cats found, function should return 0.

For example:
countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
*/
//Моё решение. Способ 1
   let countCats = [ 
    [0, 1, '^^'], 
    [0, '^^', 2], 
    ['^^', 1, 2] ];

  let sumCat = [].concat(...countCats).filter(countCats =>countCats.length > 0);
  console.log(sumCat);

  let ers = sumCat;
  let result = {};
  for (i = 0; i < ers.length; ++i ) {
    let a = ers[i];
    if (result[a] != undefined) {
        ++result[a];
    } else {
        result[a] = 1;
    }
  }

  for (let key in result)
  console.log("Котов в огороде " + key + " = " + result[key]);
 
// Сопособ 2
let result = 0;
function countCats( matrix ) {
  
  //throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

result = matrix.filter(item => item === '^^').length;
return result;
}

countCats ( [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],
].flat());

console.log(result);

/* Задачи из Codewars
Задание 1 :
Complete the solution so that it reverses the string passed into it. */
function solution(str) {
  str = "Алексей";
  string = str.split("").reverse().join("");
  return(string);
}
console.log(solution());

/*
Задание 2
 We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know? 
*/

function numberToString(num) {
  // Return a string of the number here!
 num = num.toString();
  
  return num;
 
}

 let num = 123;
console.log(numberToString(num));

/*Задание 3: Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

//Моё решение. Функция вывода найменшого числа в массиве
let arr = [34, 15, 88, 2, -3];

function args (arr){
  let result = Math.min.apply(null, arr);
  return result;
}
console.log(args(arr));

// более короткая запсь 
let arr = [34, 15, 88, 2, -3];

 function findSmallestInt(arr) {
    return Math.min(...arr)
  }

console.log(findSmallestInt(arr));

// супер короткий ваирнт 
let arr = [34, 15, 88, 2, -3];
findSmallestInt = arr => Math.min(...arr);
console.log(findSmallestInt(arr));

console.log(2+2*2 == 6);

/*Задание 4:
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ). */
//моё решение - тоже правильное 
function countBy(x, n) {
  let z = [];
  
  for (i = 1; i <= n; i++) {
    if(x % x === 0) {
      z.push(x*i) }; 
}
    return z;
  }
console.log(countBy (1, 10));
console.log(countBy (2, 5));

// короткое решение 
function countBy(x, n) {
  let z = [];
  
  for (i = 1; i <= n; i++) {
      z.push(x*i); 
}
    return z;
  }
console.log(countBy (1, 10));
console.log(countBy (2, 5));

// ультра короткое решение 
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x);
console.log(countBy (1, 10));
console.log(countBy (2, 5));

// тенеровочное задание
const multiplicityCalculation = (n, maxNum) => {
  let number = [];
  for (let i = 1; i <= maxNum; i++) {
    if (i % n === 0) {
      number.push(i);
    }
  }
  return number;
}

console.log(multiplicityCalculation(5, 200));

/* Задание 5: 
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative? 
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

// моё решение
function makeNegative(num) {
  // Code?
 num = num;
 if(num > 0 ) {
  return num = -num ;
 } else {
  if (num === 0) {
    return num;
  }
 }
return num;    
}
 console.log(makeNegative(1));

    // return -1
    console.log(makeNegative(-5));
    console.log(makeNegative(0));
    console.log(makeNegative(0.12));
;   // return -5
;    // return 0
; // return -0.12

// более оптимизированное решение 
function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}


// супер короткое решение 
function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

// ещё один короткий вариант
function makeNegative(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));


/*
Задание 6: Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6] */
//Моё решение 

function maps(x){
  let x2 = [];
   x2.push(x.map((num)=>num*2));
   return x2.flat();
 }

 let x = [1, 2, 3];
 console.log(maps(x));

 // короткое решение
 function maps(x){
  return x.map(n => n * 2);
}
// короткое решение 
function maps(x){
  return x.map (num => num * 2) 
}


/* Задание 7:
Уровень 7 kyu
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */
let friends = ["Ryan", "Kieran", "Mark"];
function friend(friends){
  //your code here
let myFriend = friends.filter(friends => friends.length === 4);
return myFriend;
}
console.log(friend(friends));

// короткое решение 
function friend(friends){
  return friends.filter(n => n.length === 4)
}

/*
Задание 8
Kyu 7
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
 */
let testing = [0, 0, 0, 1];
function binary (arr){
  result = "";
  for(let item of arr) {
    result += item
  }
  return parseInt(result, 2);
}

console.log(binary(testing));

//короткое решение 
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


/*
Задание 9:
Kyu 7
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero). */
// моё решение (не доконца решил)
let inp1 = [0, 1, 4];
 function oddOreven(inp1){
  sum = 0;
  for(i = 0; i < inp1.length; i++ ){
    sum += inp1[i];
  
  }
  console.log(sum);
 }

oddOreven(inp1);

// правельное решение 
function oddOrEven(array) {
  return array.reduce(function(sum, item) {return sum + item }, 0) % 2 == 0 ? 'even' : 'odd';
}
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0]));
//--------------- Конец 8 kyu (уровня) --------------------------------------

//------Повторение--------------

/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
 You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
 Be careful, there shouldn't be a space at the beginning or the end of the sentence!

 Example
 ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */

 let words = ['hello', 'world', 'this', 'is', 'great'];

 function smash (words) {
  
  return words.join(" ");

};

console.log(smash (words));

// Супер короткое решение
const smash = words => words.join(' ');


//--- Повторение Ката 8 
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
 */

let needly = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(haystack) {

return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(findNeedle(needly));
