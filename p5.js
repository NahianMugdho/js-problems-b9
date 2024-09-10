function monthlySavings(arr,num){
    let inc = 0;
    let tax = 0;
    if(Array.isArray(arr)==false || typeof num != 'number'){
    
      return 'invalid input'
    
    }
    else{
    for(i=0;i<=arr.length-1;i++)
    {
        inc = inc + arr[i]
        if(arr[i]>=3000){
            
            tax = arr[i]*(20/100)
            inc = inc - tax
            
            }
    
    }
    
    console.log(inc) 
    
        
    total =inc - num;
    if (total>=0)
    {
       
        return total
    
    }
    else{

        return 'Earn More'
    
    }
}
    }
    
    k = monthlySavings([ 900 , 2700 , 3400] , 10000     )
    console.log(k)