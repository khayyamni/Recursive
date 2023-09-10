"use strict";

// function showNums(num){
//     for (let i = 0; i < num; i++) {

//         console.log(i);
//     }
// }

// showNums(5);

// function showNums(num){
//    let number = num - 1

//    console.log(num);

//    showNums(5);
// }

// showNums(5);

// function showNums(num){
//     let number = num-1;
//     console.log(num);

//     if (number>0) {
//         showNums(number);
//     }
// }

// showNums(5);

// function sumOfNums(m){
//     let sum =0 ;
//     for (let i = 0; i <=m; i++) {
//         sum+=i;

//     }
//     console.log(sum);
// }

// sumOfNums(4);




// function sumOfNums(m) {
//     let functionRes;

//     if (m == 0) {
//         return m;
//     }
//     else {
//         functionRes = sumOfNums(m - 1);
//         return m + functionRes;
//     }
// }

// console.log(sumOfNums(4));





// function sumOfNums(m) {
//     if (m == 0) {
//         return m;
//     }
//     else {
//         return m + sumOfNums(m - 1);
//     }
// }

// console.log(sumOfNums(4));




// let num = 5 + test(2,4);

// function test(a,b){
//     return a+b;
// }




// let num = 5 + test(2,4);

// function test(a,b){
//     return a+b + test2();
// }

// function test2(){
//     return 50;
// }



// function sumOfNums(m) {
//     if (m == 1) {
//         return m;
//     }
//     else {
//         return m * sumOfNums(m - 1);
//     }
// }

// console.log(sumOfNums(4));




// let names = ["Fidan", "Kubra", "Cahangir", "Ismayil"];

// for (const item of names) {
//     console.log(item);
// }


    // let student = {
    //     name: "Xeyyam",
    //     surname: "Isgenderov",
    //     age: 29,
    //     address:"address",
    // }

    // for (const key in student) {
    //     console.log(key + " " + student[key]);
    // }


    // let student = {
    //     name: "Xeyyam",
    //     surname: "Isgenderov",
    //     age: 29
    // }

    // for (const key in student) {
    //     if (student[key] == "address") {
    //         console.log("yes");
            
    //     }
        
    //     else{
    //         console.log("no"); 
            
    //     }
        
    // }


    
    // let student = {
    //     name: "Xeyyam",
    //     surname: "Isgenderov",
    //     age: 29,
    //     address: "Yasamal"
    // }

    // for (const key in student) {
    //     if (key == "age") {
    //         console.log("yes");
    //     }
        
    // }


    // let stu1 = {
    //     name: "Xeyyam",
    //     age: 29
        
    // }

    // let stu2 = {
    //     name: "Pervin",
    //     age: 30
        
    // }

    // let stu3 = {
    //     name: "Fidan",
    //     age: 22
        
    // }

    // let stu4 = {
    //     name: "Kubra",
    //     age: 25
        
    // }

    // let stu5 = {
    //     name: "Surac",
    //     age: 23,
        
    // }

    // let students = [stu1, stu2, stu3, stu4, stu5];

    
    // for (const student of students) {
    //     // console.log(student);

    //     for (const key in student) {
    //         console.log(key + "--" + student[key]);
                
            
    //     }
    // }

    // for (const student of students) {
    //     // console.log(student);

    //     if (student.name == "Xeyyam") {
    //         for (const key in student) {
    //             console.log(key + "--" + student[key]);
                    
                
    //         }
    //         break;
    //     }
    // }

    // for (const student of students) {
    //     // console.log(student);

    //     if (student.age > 25) {
    //         for (const key in student) {
    //             console.log(key + "--" + student[key]);
                    
                
    //         }
            
    //     }
    // }



    
    //Task

    "use strict";

    let stu1 = {
        name: "Xeyyam",
        surname: "Isgendrov",
        age: 29,
        email: "xeyyam@icloud.com"
    }
    
    let stu2 = {
        name: "Ismayil",
        surname: "Efendizade",
        age: 13,
        email: "i.afendi@mail.ru"
    }
    
    let stu3 = {
        name: "Surac",
        surname: "Ismayilov",
        age: 25,
        email: "ismayilov@gmail.com"
    }
    
    let stu4 = {
        name: "Pervin",
        surname: "Mirzeyev",
        age: "23",
        email: "pervin.mirzeyev@icloud.com"
    }
    
    let students = [stu1, stu2, stu3, stu4];
    
    
    
    // let count=0;
    
    // students.forEach(student => {
    //     if (student.age>18 && student.age<25) {
    //         count++;
    //     }
    // });
    // console.log(count);
    
    
    // function ageCount(arr){
    //     let count=0;
    
    //     for (let i = 0; i < arr.length; i++) {
    
    //         if (arr[i].age>18 && arr[i].age<25) {
    //             count++
    //         }
    //     }
    //     return count;
    // }
    
    // console.log(ageCount(students));
    
    
    
    // function ageCount(arr){
    //     let count=0;
    // for (const student of students) {
    
    //     if (student.age>18 && student.age<25) {
    //         count++
    
    //     }
    
    // }
    //     console.log(count);
    // }
    
    // ageCount();
    
    
    
    
    // function ageCount(arr) {
    //     let count = 0;
    
    
    //     arr.forEach(student => {
    //         if (student.email.includes("c")) {
    //             count++
    //         }
    //     });
    
    //     return count;
    // }
    
    
    // console.log(ageCount(students));
    
    
    // function ageCount(arr){
    //     let count=0;
    
    //     for (let i = 0; i < arr.length; i++) {
    
    //         if (arr[i].email.includes("c")) {
    //             count++
    //         }
    //     }
    //     return count;
    // }
    
    
    // console.log(ageCount(students));
    
    
    
    // function ageCount(arr){
    //     let count=0;
    
    //     for (const student of arr) {
    
    //             if (student.email.includes("c")) {
    //                 count++
    //             }
    
    //     }
    //     console.log(count);
    // }
    
    // ageCount(students);
    
    
    
    

    