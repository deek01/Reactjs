function LetterChanges(text) 
{
    var s = text.split('');
    for (var i = 0; i < s.length; i++)
     {
    
    switch(s[i]) {
    case 'a':
        s[i]='1'
    break;
    case 'e':
    s[i] = '2';
    break;
    case 'i': 
    s[i] = '3';
    break;
    case 'o': 
    s[i] = '4';
    break;
    case 'u': 
    s[i] = '5';
    break;
    }
}
    return s.join('');
}
console.log(LetterChanges("javascript"));