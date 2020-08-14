function reverse1(str, c) 
{
    var word=[];
    word = str.match(/\S+/g);
    var s1="";
    for(i=0;i<word.length;i++)
    {
        if(word[i].charAt(0)==c)
        {
            s1+=word[i].split('').reverse().join('')+" ";
        }
        else 
        {
            s1+=word[i]+" ";
        }
    }
    return s1;
}
console.log(reverse1("java is fun",'f'));