


const p3 = (s, f) => f(s);

const expr1 = p3('supercalifragilisticexpialidocious', s=>{
  let hold = s.split('c');
  for(let i=1; i< hold.length; i++){
      hold[i]= 'c'.concat(hold[i]);
  }
  return hold;
})

console.log(expr1)