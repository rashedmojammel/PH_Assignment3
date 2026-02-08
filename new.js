function analyzeText(str) {
     if( typeof str == "number" || typeof str =='object' || Array.isArray(str) || str =="" )
    {
        const error = "Invalid";
       // console.log(error)
        return error;
    }
    let words = str.split(" ");
    let longestWord = words[0];
    let shortestWord = words[0];

    for(const word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
        if(word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    
    const finalresult = {
        longestWord: longestWord,
        longestLength: longestWord.length,
        shortestWord: shortestWord,
        shortestLength: shortestWord.length
    };
    
   console.log(finalresult) 
}
// analyzeText("Programming is fun");
analyzeText(12344);
analyzeText("Hello world");

// analyzeText("Keep coding keep shining");
