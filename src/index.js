module.exports = function reverse (n) {
    if (n>=0){
    return (
        parseFloat(
          n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(n)
      )   }
      else
      { 
        return  +("" + -n).split("").reverse().join("");
      
    }   
}           

