// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

//! my code
function convertToRoman(num){
    let lib = [['M',1000],['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];

    let ans =[];

    lib.forEach(function(i){
        while(num >= i[1]){
            ans.push(i[0]);
            num-=i[1]
        }
         })
        return ans.join('');
        }
   
    