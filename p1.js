function calculateMoney( sale)
{
    tkt_price = 120;
    guard = 500;
    launch = 8*50;
    total = (sale*tkt_price)-(guard+launch)
    if(total>=0)
    {
        
        return total
    }
    else{
        total = "invalid"
        return total
    }

}

v=calculateMoney(-10)
console.log(v)