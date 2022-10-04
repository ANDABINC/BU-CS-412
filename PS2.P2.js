function* sentenceGen (str){
    const strarray= str.split(" ")

    for (let count = 0; count<strarray.length; count++){
        console.log(strarray[count])
    }
}

const sentenceIter = sentenceGen("All I know is something like a bird within her sang")
sentenceIter.next()