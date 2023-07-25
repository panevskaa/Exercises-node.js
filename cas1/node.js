// const arr = ["a", 4, "b", 2, "c"];



// // 1. Find
// const res = arr.find ((el) => el === "b");
// console.log("res", res); 
// // This will return res b from the array arr.
// // in the background, ova e isto samo so if.
// const res2 = arr.find((el) => {
//     if(el === "a"){
//     return  el;
//     }
// })
// console.log("res", res2);


// // How to make reverse on array?

// for (let i = arr.length -1; i >=; i--){
//     console.log("i", arr[i]);
// }
// // arr.length -1 ja prevrtuva nizata od posleden kon prv element


// // 2. Map- return new array

// const mapEl = arr.map((el) =>{
//     if (el=== "a"){
//         el = "A";
//     }
//     return el;
// })

// console.log("mapEl", mapEl);
// // It will return mapEl["A", 4, "b", 2, "c"]

// const mapEl = arr.map((el) => el);

// console.log("mapEl", mapEL);
// // This will return mapEl  ["a", 4, "b", 2, "c"]

// const arr = ["a", 4, "a", 2, "c"];
// const mapEl = arr.map((el) => el === "a");

// console.log("mapEl", mapEl);
// // This will return mapEl [true,false,true,false,false]

// const mapEl = arr.map ((el) =>{
//     if (el ==="a")return el;

// });
// // This will return mapEl['a', undefined, 'a', undefined, undefined]




// // 3. Foreach

// const loops = arr.forEach(el => el);
// console.log("loops", loops);
// // This will return loops undefined

// // 4. Reduce

// const reducer = arr. reduce ((acc, curr) => {
//     if (typeof curr === Number)
//     acc = acc + curr;
//     return acc;
// })
// console.log("reducer", reducer);
// // This will return reducer a, beacuse we are not in the condition

// const arrNumbs = [10,50,30];
// const reducer = arrNumbs.reduce ((acc, curr) => acc+curr);
    
// console.log("reducer", reducer);

// // This will return 90.

// const arrNums = [1,2,7,8,9,10,3,4,5,6];  //this is bubble sort
// //(a)e na prviot element (b) e na vtoriot. a go sporeduvam 
// //so 2 pa so 7 itn... (b) sheta niz nizata, 
// //(a) ne sheta. Koga ke zavrsi prvata 
// //iteracija (a) kje se zgolemi za 1 i kje proveruva toa sto ostanalo od nizata



// // const sortData = arrNums.sort(el => {
// //     if(el>5) return 1;   //ascending order
// //     return -1; //descending order
// // })

// const sortData = arrNums.sort((a,b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     if (a===b) return 0;
// }) ;

// console.log ("sortData", sortData); //kje ja dade cela niza


// // 6. Filter

// const filterData = arrNums.filter((el)=> el >5);

// console.log("data", filterData);
// // Kje gi vrtai site elementi sto 
// //go ispolnuvaat uslovot, vo ovoj slucaj site
// // pomali od 5.



// //Objects
// const student = {
//     name: "Test User",
//     age:20,
//     uni: "FINKI",
//     averageGrade: 7.5,
// };
// //  console.log('student name', student.name); or
// console.log("student name", student ["name"]);


