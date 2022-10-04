function* fibs() {
    let [val1, val2, result] = [0,1,0];
    while (true){
        result = val1 + val2
        val1 = val2
        val2 = result
        yield result
    }
}

function* fibeven (){
    const fib= fibs()
    let count = 6
    while (count >0){
        let fibnum = fib.next().value
        if (fibnum % 2 ===0) {
            console.log(fibnum)
            count--
        }
    }
}

const fibprint = fibeven()
fibprint.next()