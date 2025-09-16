// 1935. Maximum Number of Words You Can Type
const ejemplo1 = "hello world"
const ejemplo2 = "leet code"
const ejemplo3 = "a b c d e"
const brokenLetters1 = "ad"
const brokenLetters2 = "lt"
const brokenLetters3 = "e"

var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ')
    const letterArray = [...brokenLetters]
    let newWords = words.filter(word => [...word].every(char => !letterArray.includes(char)) )
    return newWords.length
    
};
console.log(canBeTypedWords(ejemplo1, brokenLetters1)) // 1
console.log(canBeTypedWords(ejemplo2, brokenLetters2)) // 1
console.log(canBeTypedWords(ejemplo2, brokenLetters3)) // 0