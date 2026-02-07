function finalScore(omr) {
    let sum = 0;
    let deduct = 0;
    let totalmark = 0;
    let attempt = 0;
 
    sum = sum + omr.right;
    deduct = deduct + omr.wrong;

    if(typeof omr == 'string' || typeof omr =='string')
    {
        const error = "Invalid"
        return error;
        
    }
    else if ( sum + deduct > 100 || (omr.right == null && omr.wrong ==null) )
    {
        const error = "Invalid"
        return error;
    }
    else{
        deduct *= 0.5;
    totalmark = sum - deduct;
    const finalmark = Math.round(totalmark);
    return finalmark;

    }

}

// const marks =[
//     { right : 45},
//     { wrong : 25},
//     { skip  : 0},
// ];

const mar = finalScore({"right":80,"wrong":25,"skip":0});
console.log("Total marks ",mar);

