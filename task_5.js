function analyzeText(str) {
     if( typeof str == "number" || typeof str =='object' || Array.isArray(str) || str =="" )
    {
        const error = "Invalid";
        console.log(error)
        return error;
    }
    let words = str.split(" ");
    let longestWord = words[0];
    let shortestWord = words[0];

    for(const word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
  
    const finalresult = {
         longwords  : longestWord,
            token : words.join("").length
    };
    return finalresult;
    
console.log(finalresult);  
}

// analyzeText("Programming is fun");
analyzeText(12344);
analyzeText("Hello world");
analyzeText("Keep coding keep shining");