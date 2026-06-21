// Given an integer x, return true if x is a palindrome, and false otherwise.

const num =121;

const ifIsPalindrome =(number)=>{

    const numSting = num.toString();
    console.log(numSting.split('').reverse().join(''))

}

ifIsPalindrome(num)