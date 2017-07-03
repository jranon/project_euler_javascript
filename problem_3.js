//https://projecteuler.net/problem=3

/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/
function largestPrimeFactor(x) {
  var factor=2;
  while (x>factor) {
    if (x%factor===0) x=x/factor;
    else factor++;
  }
  return factor;
}

largestPrimeFactor(13195);