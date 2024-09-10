function  deleteInvalids(arr){
    emp = []
    if (Array.isArray(arr)== false)
    {
        k = "error input"
        return k
        
    
    }
    else{

    for(let i=0;i<arr.length;i++){

        num= arr[i]
        if (typeof num == 'number' && isNaN(num) == false){
            
            emp.push(num)
        }
       
        else{
            continue
        }
        

    }

    return emp
}
}

arr = [ 1 , 2 , -3 ]
h = deleteInvalids(arr)
console.log(h)

