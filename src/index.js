const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let score = 0;
  let result = '';
  for (let i = 0; i < expr.length; i += 2) {
    score++;
    if(expr[i] == '*') {
      result += ' ';
      i += 8;
      score += 4;
    }
    if(expr[i] == '1' && expr[i + 1] == '1') result += '-';
    if(expr[i] == '1' && expr[i + 1] == '0') result += '.';
    if(score % 5 === 0) result += '/';
  }
  arr = result.split('/');
  result = '';
  arr.pop();
  arr.forEach(e => {
    if(e === ' ') result += ' ';
    else result += MORSE_TABLE[e]
  })

  return result;
}

module.exports = {
    decode
}