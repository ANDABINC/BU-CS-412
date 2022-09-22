

const eva = str =>{
    switch (str[1]){
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

const parser = (eva, str)=>eva(str[0], str[2])


//do the call, eva(4+2)()
// const eval_str = s => eva(s)

const expression = '5*7';
console.log(parser(eva(expression),expression));