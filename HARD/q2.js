function num(s)
{
    var s1=[];
    for(i=0;i<s.length;i++)
    {
        if(!(/\d/.test(s[i])))
        {
            s1+=s[i]+" ";
        }
    }
    return s1;
}
console.log(num(["abc","1a","def","2b"]));