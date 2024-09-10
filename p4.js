function password(obj){
    arr=[]
    v=obj.siteName.split('')
    
    l=v[0]
    
    v[0]=l.toUpperCase()
    
    w= v.join('')
    obj['siteName'] =w
    n= obj['birthYear'].toString()
    for(const prop in obj)
        {
            
            arr.push(obj[prop])
        }

    if (arr.length==3 && n.length== 4){
    
    
    res = arr[2]+'#'+arr[0]+'@'+arr[1]
    return res
}
else{
   return "invalid"

}
  
    
}

j=password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }
)
console.log(j)

