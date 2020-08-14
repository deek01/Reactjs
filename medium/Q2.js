function check(ch)
{
    var s=ch[0];
    c=1;
    val =false
    for(i=1;i<ch.length;i++)
    {
        if(ch[i]==s)
        {
        c+=1;
        }
    }
    if(c==ch.length)
    {
        val=true;
    }
    return val;
}
console.log(check(['@','@','@']));