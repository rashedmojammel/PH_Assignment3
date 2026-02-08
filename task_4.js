function gonoVote(array) {

    let isha = true;
    let haVote = 0;
    let naVote = 0;

    if( typeof array == 'string' || typeof array == 'object' || typeof array =='number')
    {
         const error = "Invalid";
        return error;   
    }
    for ( const arr of array)
    {
        if( arr === 'ha')
        {
            haVote++;
        }
        else
        {
            naVote++;
        }  
    }
    if(haVote === naVote)
        {
            const msgShow = "equal";
            return msgShow;
        }
        else if ( haVote > naVote)
        {
            return true;
        }
        else {
            return false;
        }
}

const arr = ["ha","na","ha","na","ha","na","ha","na","ha","na","ha"]
const final = gonoVote(arr)
