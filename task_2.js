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

const num =2 ;
validOtp(num);