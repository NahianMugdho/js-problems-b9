function checkName(name){
    if (typeof name !=='string')
    {
        v= 'invalid'
        return v
    }
   
    // a, y, i , e , o , u, w
k=name.toLowerCase()   
k =k.split('');
if (k[k.length-1] == 'a' || k[k.length-1]=='y' || k[k.length-1]=='i' || k[k.length-1]=='e' || k[k.length-1]==='o' || k[k.length-1]=='u'|| k[k.length-1] == 'w'  )
{
   v = "good name";
   return v
}
else{
    v = "bad name";
    return v
}



}

let c = "RaFEE"
console.log (checkName(c))