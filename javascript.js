//variable
// 01.var
// var a =10
// console.log(10)
// let a = 10
// let a = 20 // SyntaxError: Identifier 'a' has already been declared

// 02. let
// let a = 20
// a = 40
// console.log(a)

//03.const
// const b = 30
// b= 40 //Assignment to constant variable.
// console.log(b) // 30

// 04.function
// normal function
function name(params) {
  //    return params
  return params + params;
}
// console.log(name(10));
//arrow function
// const arrowFun = (num) => num; //no need return keyword
const arrowFun = (num) => {
  return num;
  jjj; //not run this line bcz after return no line will be not run
}; //no need return keyword

// console.log(arrowFun(56));
function name2(one, two, three, four) {
  return two;
}
// console.log(name2(56, 67, 89, 56))

function name2(...one) {
  console.log(...one, "one"); // 56 67 89 56
}
// console.log(name2(56, 67, 89, 56))

function name2(one = null, two = 0) {
  //null+0 null-> falsy value 0+0 = 0
  return one + two;
}
// console.log(name2())

function name2(one = null, two) {
  // 3+undefined NaN
  return one + two;
}
// console.log(name2());

function name2(one = null, two = null) {
  // Null+Null 0 +0 = 0
  return one + two;
}
// console.log(name2());

// 05.Operator
// + * % -
// console.log(3+10) // 13

// console.log("3" + 3 + 44);
// "3" + 3 ->"33"+44-> "3344"

// console.log(10 / 2 + "3" - 6);
// 5+"3"->"53"-6-> 53-6 47
// + ->conc and *, % / working calc

//06.Numbers
// console.log(Number("3")+3)

// console.log(Number("3.2")+3) 6.2

// console.log(parseInt("6PO78")) //check whole string take first occurs number 6
// console.log(parseInt("89PO78")) //check whole string take number  starting end number check--> 89
// console.log(parseInt("PO78")) //first confirm number shouble here check--> NaN

//07.Math function
// console.log(Math.floor(101/10)) //->10.1-> 10
// console.log(Math.ceil(101/10)) // 10.1-> 11
// console.log(Math.abs(-9.8))  //handle -minus calc 9.8

// console.log(Math.floor(106 % 10));
// console.log(Math.ceil(106 % 10));

//Array
const a = [1, 3, 5];
// console.log(a[2])
//Loop
// for(i=0; i<a.length;i++){
//     console.log(a[i]);
// }

// for in -> index
// for(let num in a){
//     console.log(a[num]);
// }

// of -> value
// for(let balaji of a){
//     console.log(balaji);
// }
const arrObj = [
  { name: "balaji", age: 100 },
  { name: "ragu", age: 90 },
];
// for(let obj of arrObj){
//     console.log(obj)
// }
//Map
arrObj?.length > 0 &&
  arrObj?.map((obj) => {
    if (obj.name == "ragu") {
      return { age: 77, name: "ram" };
    }
    return obj;
  }); // [ { name: 'balaji', age: 100 }, { age: 77, name: 'ram' } ]
// console.log(arrObj) // desnt affect orginal vlaue [ { name: 'balaji', age: 100 }, { name: 'ragu', age: 90 } ]

//filter
console.log(
  arrObj?.filter((obj) => {
    if (obj.age == 100) {
      return { age: obj.age };
    }
  })
);
// console.log(arrObj)
// [] === []
