function* sentenceGen (string){
    const stringarray= string.split(" ")

    for (let count = 0; count<stringarray.length; count++){
        console.log(stringarray[count])
    }
}

const sentenceIter = sentenceGen("All I know is something like a bird within her sang")
sentenceIter.next()