
/**
 * Find class wise student result
 */

let bn = parseInt(prompt('Bangla'))
let en = parseInt(prompt('English'))
let math = parseInt(prompt('Math'))
let s = parseInt(prompt('Science'))
let sc = parseInt(prompt('Social Science'))
let rel = parseInt(prompt('Religion'))

let bnG = `${gpaCell(bn)}`;
let enG = `${gpaCell(en)}`;
let mathG = `${gpaCell(math)}`;
let sG = `${gpaCell(s)}`;
let scG = `${gpaCell(sc)}`;
let relG = `${gpaCell(rel)}`;


let finalGpa = (`${Number(bnG) + Number(enG) + Number(mathG) + Number(sG) + Number(scG) + Number(relG) }`)

 studentData.sort().map( (Data,index) => {

    if (Data[3] === '03') {
    
        console.log(`
        Name  : ${Data[0]}
        Class : ${Data[3]}
        Location : ${Data[5]}
        -----------------------
        You Got Gpa ${finalGpa/6}
        `);
    }
});





