//task1
function newPrice(currentPrice , discount ) {

    if( typeof currentPrice !== "number" || typeof discount !== "number")
    {
        const error = "Invalid";
        return error;

    }
      
    else{
    const discountPrice = (currentPrice * discount) / 100 ;
    const totalPrice = currentPrice - discountPrice;
    const totalPrice2 = totalPrice.toFixed(3);
    return totalPrice2;



    }
    
}

//task2
function validOtp(otp) {
  let isPassword = true;
    
    if(typeof otp =="number" || typeof otp =="object")
    {
        const error = "Invalid";
        return error;
    }
    else if( otp.length === 8 && otp.startsWith("ph-"))
    {
       
      if(isPassword==true)
      {
        return true;
      }  
    }
    else
    {
        return false;
    }
    
}
//task3
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

