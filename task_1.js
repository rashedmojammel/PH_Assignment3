
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

const amount = newPrice(1000,20)

