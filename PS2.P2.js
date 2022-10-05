function* sentenceGen (str){
    yield* str.split(" ")
    // const strarray= str.split(" ")  //yield* str.split(" ");
    //
    // for (let count = 0; count<strarray.length; count++){
    //     console.log(strarray[count])
    // }
}

const sentenceIter = sentenceGen("All I know is something like a bird within her sang")
let strnext = sentenceIter.next()
while (strnext.done === false){
    console.log(strnext.value)
    strnext = sentenceIter.next()
}