function count(str, letter) 
{
    var c=0;
    for (var i = 0; i < str.length; i++) 
    {
        if (str.charAt(i) == letter) 
        {
        c += 1;
        }
    }
    return c;
}
console.log(count("the man is good",'o'));