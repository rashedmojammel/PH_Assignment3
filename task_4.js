function gonoVote(array) {

    //let isha = true;
    for ( const arr of array)
    {
    if(arr.includes("ha") === arr.includes("na"))
    {
        const size = "equal"
        return size
    }
    else if(arr.includes("ha") > arr.includes("na"))
    {
        return true;
    }
    else if ( typeof arr == "number" )
    {
        const error = "Invalid";
        return error;
    }

    }

    
    
}

const arr = ["ha","na","ha","na","ha","na","ha","na","ha","na","ha"]
const final = gonoVote(arr)
