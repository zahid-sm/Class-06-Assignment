const studentData = [
    ['Sm_Zahid','1285','25','04','Male','Rajshahi','5220','5.00'],
    ['Sm_Elias','1286','32','05','Male','Dhaka','3230','4.56'],
    ['Sm_Firoj','1287','18','03','Male','Rajshahi','3302','2.11'],
    ['Joynal','1288','32','05','Male','Pabna','6120','5.00'],
    ['Firoza','1289','21','05','Female','Dhaka','2500','3.00'],
    ['Jim','1290','16','03','Male','Rajshahi','3500','2.5'],
    ['Helena','1291','23','04','Female','Pabna','4650','3.5'],
    ['Jabbar','1292','32','05','Male','Dhaka','4403','4.00'],
    ['Raji','1293','12','03','Female','Pabna','5200','3.96'],
    ['Hira','1294','24','04','Female','Dhaka','3220','4.98'],

    ['Nabil','1801','11','03','Male','Rajshahi','2650','3.5'],
    ['Sorna','1802','27','05','Female','Pabna','3560','4.15'],
    ['Boni','1803','25','04','Male','Dhaka','3300','2.66'],
    ['Jesmin','1804','16','03','Female','Pabna','4520','4.00'],
    ['Juthy','1805','25','03','Female','Pabna','2300','0.00'],
    ['Atik','1806','21','05','Male','Dhaka','2632','1.00'],
    ['Biru','1807','08','04','Male','Dhaka','4200','1.99'],
    ['Rohim','1808','31','05','Male','Rajshahi','2100','4.99'],
    ['Alpona','1809','10','03','Female','Pabna','3500','4.88'],
    ['Rumi','1890','34','04','Female','Rajshahi','4520','3.78'],

    ['Samiul','8501','34','05','Male','Dhaka','4520','4.00'],
    ['Sowkin','8502','34','04','Male','Rajshahi','1520','2.00'],
    ['Zeam','8503','34','04','Male','Pabna','3200','1.00'],
    ['Meghla','5004','13','03','Female','Rajshahi','1500','0.00'],
    ['Moon','8505','34','04','Female','Dhaka','2120','4.68'],
    ['Hafca','8506','27','05','Female','Pabna','2303','2.58'],
    ['Sajid','8507','34','04','Male','Dhaka','3260','3.86'],
    ['Muktadir','8508','34','04','Female','Pabna','3620','2.33'],
    ['Rohan','8509','34','04','Male','Rajshahi','760','1.37'],
    ['Rafi','8510','34','04','Male','Dhaka','3263','0.00']
]

/**
 * otal Admnission fees
 */


// let totalFees = 0;
// studentData.sort().forEach( (Data,index) => {

//     console.log(`

//         Id ; ${Data[1]}
//         Name : ${Data[0]} 
//         Admission Fee : ${Data[6]}`)

//         totalFees += Number(Data[6])
// });

// console.log(`
// ----------------------------------------------
//         Total Ammount = ${totalFees}`);





/**
 *  Find All Female Students
 */


// studentData.sort().map( (Data,index) => {

//     if (Data[4] === 'Female') {
//         console.log(`
        
//         Name : ${Data[0]}
//         Roll : ${Data[1]}
//         Age : ${Data[2]}
//         Gender : ${Data[4]}
//         Location : ${Data[5]}
        
//         `)
//     }
// })




/**
 * 
- Find class wise student
 */

// studentData.forEach( (Data,index) => {

//     if ( Data[3] == 3) {

//         console.log(`  
//         Name : ${Data[0]}
//         Class : ${Data[3]}
//         Roll : ${Data[1]}
//         Age : ${Data[2]}
//         Gender : ${Data[4]}
//         Location : ${Data[5]}     
//         `)
//     }
// })






/**
 * Location wise student result
 */

// studentData.forEach( (Data,index) => {

//     if (Data[5] == 'Rajshahi') {
//         console.log(`  
//          Name : ${Data[0]}
//          Class : ${Data[3]}
//          Roll : ${Data[1]}
//          Age : ${Data[2]}
//          Gender : ${Data[4]}
//          Location : ${Data[5]}     
//          `)
//     }
// } )


/**
 * find student between 10 - 25 age
 */

// studentData.forEach( (Data,index) => {
//     if ( Data[2] >= 10 && Data[2] <= 25) {
//         console.log(`  
//          Name : ${Data[0]}
//          Age : ${Data[2]}
//          Roll : ${Data[1]}
//          Age : ${Data[2]}
//          Gender : ${Data[4]}
//          Location : ${Data[5]}     
//           `)
//     }
// })