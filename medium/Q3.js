function getUnique(a){
    var val = [];
    
    // Loop through array values
    for(i=0; i < a.length; i++){
        if(val.indexOf(a[i]) === -1) {
            val.push(a[i]);
        }
    }
    return val;
}
console.log(getUnique(["John", "Peter", "Clark", "Harry", "John", "Alice"]));