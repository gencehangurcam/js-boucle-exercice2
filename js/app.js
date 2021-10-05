//exo1
// let multiplicateur = 5;
// for (let i = 0; i <= 9; i++) {
//     console.log(multiplicateur+ "X" + i + "=" + (multiplicateur*i));
// }

// exo2

// for (let i = 0; i <= 10; i+2) {
//     if(i % 2 == 0){
//         console.log(`numero pair  ${i}`);}
//     else {
//         console.log(`numero impair ${i}`);
//     }
// }


// for (let i = 0; i < 9; i = i + 2) {
//     if (i % 2 == 0) {
//         console.log(`numero paire : ${i}`);

//     } else {
//         console.log(`numero impair : ${i}`);

//     }

// }

// // for (let i = 20; i < 20; i = i--){
// //     console.log(i);
// }

//exo3
// for (let i = 20; i > 0; i--) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
//   }
  
//exo4
// let tab = ['genc', 'jimmy', 'ernesto', 'bilal']
// tab.forEach(i => {
//     if(i.length > 5)
//     console.log(i);
// });

//exo5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

// let GrosssesSommes = [];

// sommes.forEach(element => {
//     if (element > 60) {
//         GrosssesSommes.push(element)
//         console.log(element);
//     }
// });

//6
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre  = [];

donnees.forEach(element => {
    switch(typeof element){
        case 'number':
            typeNumber.push(element)
            break;
        case 'boolean' :
            typeObject.push(element)
            break;
        case 'string':
            typeString.push(element)
            break;
        default:
            typeAutre.push(element)
            break;
    }
});
