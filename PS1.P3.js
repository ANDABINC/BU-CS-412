


const p3 = (s, f) => f(s);

const expr1 = p3('supercalifragilisticexpialidocious', s=>{
  let hold = s.split('c');
  for(let i=1; i< hold.length; i++){
      hold[i]= 'c'.concat(hold[i]);
  }
  return hold;
})

const expr2 = p3('supercalifragilisticexpialidocious', s=>{
    let ob= {originalString: s, modifiedString:"", numberReplaced: 0, length: 0};
    let hold = s.split("");
    let count = 0;
    for (let i=0; i<hold.length; i++){
        if (hold[i] === 'a'){
            hold[i] = 'A';
            count++
        }
    }
    ob.modifiedString = hold.join("");
    ob.numberReplaced = count;
    ob.length = hold.length;
    return ob;
})

console.log(expr1)
console.table(expr2)