 function palindrome(str){

     function reversedfunction(s){
        let reversed = '';
        for(let i=str.length-1;i>=0;i--){
            reversed = reversed+ str[i]
        }
        return reversed
     }  
      let cleanedStr = str.toLowerCase();
      return cleanedStr === reversedfunction(cleanedStr) ? "palindrome" : "not a palindrome"
    
 }

console.log( palindrome("radare"));
