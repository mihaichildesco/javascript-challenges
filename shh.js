function whisper(sentence) {
    if(sentence.endsWith('!')){
        return "shh... " + sentence.slice(0, -1).toLowerCase()
    } else {
        return "shh... " + sentence.toLowerCase()
    }
}

console.log(whisper("PLEASE STOP SHOUTING.")); // output: shh... please stop shouting
console.log(whisper("MA'AM, this is a Wendy's!"));