module.exports = {
  sayHi: (name) => {
    console.log('hi' + name);
  },
  sayGoodbye: (name) => {
    console.log('goodbye' + name);
  },
  sayCount: (word) => {
    console.log(word + ' word lenght is: ' + word.length);
  },
  sayFirstAndLast: (word) => {
    const x = word;
    const middle = x.slice(1, x.length - 1);
    console.log('middle ' + middle);
  },
  removeUppercase: (text) => {
    const word = text;
    let result = word.replace(/[A-Z]/g, '');
    console.log('result', result);
  },
  multiplyNumbers: (text) => {
    const wordArr = text.split('');
    let result = wordArr.map(x => {
      if (!isNaN(x) && x !== ' ') return Number(x) * Number(x);
      else return x;
    }).join('');
    console.log('result', result);
  }
}

// create node.js module to have these methods:
//* receives text, counts his length and console logs it
//* takes first and last letter of the text and console logs it
//* Removes all upperCase letters from text
//* takes array with strings and numbers and multiplies numbers by two (does nothing to strings)