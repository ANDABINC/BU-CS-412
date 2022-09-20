

const eva = s =>{
    let str = s.split("");
    let left= str[0];
    let op = str[1];
    let right = str[2];
    switch (op){
        case '+':
            return left + right;
            break;
        case '*':
            return left* right;
            break;
        case '-':
            return  left - right;
            break;
        case '^':
            return left ** right;
            break;
        case '/':
            return left / right;
            break;
    }
}


const eval_str = s => eva(s)

const expression = '5*7';
console.log(eval_str(expression));