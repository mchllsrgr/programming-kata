let calculateChange = function(total, cash) {
  let remainder = cash - total;

  let dollar = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  let dollarKeys = Object.keys(dollar);

  const result = {};
  for (let i = 0; i < dollarKeys.length; i++) {
    if (remainder >= dollar[dollarKeys[i]]) {
      let numBills = Math.floor(remainder / dollar[dollarKeys[i]]);
      result[dollarKeys[i]] = numBills;
      remainder -= numBills * dollar[dollarKeys[i]];
    }
  }
  return result;
};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// expected output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }