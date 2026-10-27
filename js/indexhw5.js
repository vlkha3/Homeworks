// Quest 1.1
function stringToArray(str) {
  return str.split(' ');
}

console.log(stringToArray("Владислав учит JavaScript"))



// Quest 1.2
function getFirstChars(str, length) {
    return str.slice(0, length)
}
console.log(getFirstChars("JavaScript", 4))



// Quest 1.3
function cutString(str, n) {
    return str.split(' ').slice(str, n).join(' ')
}
console.log(cutString("Я учу JavaScript каждый день", 3))


// Quest 1.4


function limitStr(str, n, symb = '...') {

  if (str.length <= n) {
    return str;
  }

 else {
  return str.slice(0, n) + symb;
}}
console.log(limitStr("Hello World", 5))



// Quest 1.5
function getFileName(pathname) {
    return pathname.slice(pathname.lastIndexOf('\\') + 1)
}
console.log(getFileName("C:\\Users\\Ivan\\report.txt"))


// Quest 1.6
function getSubstr(str, char, pos) {
    if (pos === 'before') {
        return str.slice(0, str.indexOf(char))
    }
    else if (pos === 'after'){
        return str.slice(str.indexOf(char) + 1)
    }
   
}
console.log(getSubstr("user@mail.ru", "@", "after"))
console.log(getSubstr("user@mail.ru", "@", "before"))

// Quest 1.7
function insert(str, substr, pos = 0){
  return str.slice(0, pos) + substr + str.slice(pos)
}
console.log(insert("Hello world", ",", 5))
console.log(insert("world", "Hello "))


// Quest 2.1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst("ivan"))


// Quest 2.2
function capitalize(str) {
     const words = str.toLowerCase().split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length === 0) {
      result.push(word);
      continue;
    }
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
}
console.log(capitalize("каждый охотник желает знать"))


// Quest 2.3
function changeRegister(str) {
    let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}
console.log(changeRegister("КаЖдЫй ОхОтНиК"))


// Quest 2.4
function insertDash(str) {
    return str.toUpperCase().split(' ').join('-')
}
console.log(insertDash("i love javascript"))


// Quest 2.5
function initCap(str) {
  const words = str.toLowerCase().split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }

  return result;
}
console.log(initCap("hello my world"))

// Quest 2.6
function initSnake(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      if (i > 0) {
        result += '_';
      }
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
}
console.log(initSnake("HelloMyWorld"))


// Quest 3.1
function removeChar(str) {
  return Array.from(str).filter(ch => {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) return true; 
    if (code >= 97 && code <= 122) return true; 
    if (code >= 1040 && code <= 1103) return true; 
    if (code >= 48 && code <= 57) return true; 
    return false;
  }).join('');
}
console.log(removeChar("Привет, World! 2026 :)"))

// Quest 3.2
function strip(str) {
    return str.trim().split(' ').filter(word => word !== '').join(' ')
}
console.log(strip(" Каждый охотник   желает "))



// Quest 3.3
function repeatStr(str, n = 1) {
  return str.repeat(n);
}
console.log(repeatStr("ab", 3))


// Quest 3.4?
function zeros(num, len) {
  const isNegative = num < 0;
  const absNum = Math.abs(num);
  const padded = String(absNum).padStart(len, '0');
  return (isNegative ? '-' : '+') + padded;
}
console.log(zeros(5, 4))      
console.log(zeros(-42, 5))  


// Quest 4.1
function isEqualIgnoreCase(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  return a.includes(b) && a.length === b.length;
}
console.log(isEqualIgnoreCase("JavaScript", "javascript"))


// Quest 4.2
function insensitiveSearch(str1, str2) {
 
  if (str2 === '') return -1;

  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  return lowerStr1.indexOf(lowerStr2);
}
console.log(insensitiveSearch("Я изучаю JavaScript", "javascript"))



// Quest 4.3
function hasEnding(str, ending) {
  if (ending.length > str.length) return false;
  const lastPart = str.slice(-ending.length);
  return lastPart === ending;
}
console.log(hasEnding("report.txt", ".txt"))

// Quest 4.4
function count(str, search) {
  if (search === '') return 0;
  let count = 0;
  let pos = 0;
  while (true) {
    const index = str.indexOf(search, pos);
    if (index === -1) break; 
    count++;
    pos = index + 1;
  }
  return count;
}
console.log(count("абракадабра", "а"))



// Quest 4.5
function hasWord(str, word) {
  if (!word) return false;
  const lowerStr = str.toLowerCase();
  const lowerWord = word.toLowerCase();
  let pos = lowerStr.indexOf(lowerWord);

  while (pos !== -1) {
    const start = pos;
    const end = pos + lowerWord.length;
    const beforeOk = (start === 0) || !isLetterOrDigit(lowerStr[start - 1]);
    const afterOk = (end === lowerStr.length) || !isLetterOrDigit(lowerStr[end]);

    if (beforeOk && afterOk) {
      return true;
    }
    pos = lowerStr.indexOf(lowerWord, pos + 1);
  }

  return false;
}
function isLetterOrDigit(ch) {
  const code = ch.charCodeAt(0);
  if (code >= 65 && code <= 90) return true;
  if (code >= 97 && code <= 122) return true;
  if (code >= 1040 && code <= 1103) return true;
  if (code >= 48 && code <= 57) return true;
  return false;
}
console.log(hasWord("Я люблю JavaScript", "JavaScript"))
console.log(hasWord("Я люблю JavaScript", "Java"))