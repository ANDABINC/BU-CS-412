

const eva = s =>{
    switch (s.split("")[1]){
        case '+':
            return (left,right) => left + right;
            break;
        case '*':
            return (left, right) => left*right; //(left, right) => left*right;
            break;
        case '-':
            return  (left, right) => left - right;
            break;
        case '^':
            return (left,right) => left**right;
            break;
        case '/':
            return (left, right) => left/right;
            break;
    }
}

const parser = (eva, s)=>eva(s.split("")[0], s.split("")[2])


//do the call, eva(4+2)()
// const eval_str = s => eva(s)

const expression = '5*7';
console.log(parser(eva(expression),expression));