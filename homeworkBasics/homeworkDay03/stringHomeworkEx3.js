//Example:3  function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
//1. Remove spaces and convert all letters to the same case
//2. Sort the Characters
//3. Compare Sorted Strings
//4. Return the Result
function isAnagram(string1,string2){
    const str1 = string1.toLowerCase().trim().split('').sort().join('')
    console.log(str1)
    const str2 = string2.toLowerCase().trim().split('').sort().join('')
    console.log(str2)
    if((str1==str2) & (str1===str2))
        return true
    else 
        return false
}
console.log(isAnagram(`Silent`,`listen`))