'use strict';

/* 
 Плохой не-валидный словарь символов

*/
// let badPattern = /[^`!?{}=*;><^%$#`~=|\/]/gi;
var badPattern = '`![]?{}=*;><^%$#`~=|\/';

/* 
			100 firstname
*/

var firstName = ['Donald', 'Chester', 'Peter', 'Campbell', 'Jack', 'Denis', 'Hugo', 'Simpson', 'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna', 'Rebecca', 'Virginia', 'Kathleen', 'Pamela', 'Martha', 'Debra', 'Amanda', 'Stephanie', 'Carolyn', 'Christine', 'Marie', 'Janet', 'Catherine', 'Frances', 'Ann', 'Joyce', 'Diane', 'Alice', 'Julie', 'Heather', 'Teresa', 'Doris', 'Gloria', 'Evelyn', 'Jean', 'Cheryl', 'Mildred', 'Katherine', 'Joan', 'Ashley', 'Judith', 'Rose', 'Janice', 'Kelly', 'Nicole', 'Judy', 'Christina', 'Kathy', 'Theresa', 'Beverly', 'Denise', 'Tammy', 'Irene', 'Jane', 'Lori', 'Rachel', 'Marilyn', 'Andrea', 'Kathryn', 'Louise', 'Sara', 'Anne', 'Jacqueline', 'Wanda', 'Bonnie', 'Julia', 'Ruby', 'Lois'];

/* 
  			100 lastname

*/

var secondName = ['Donald', 'Chester', 'Peter', 'Campbell', 'Jack', 'Denis', 'Hugo', 'Simpson', 'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna', 'Rebecca', 'Virginia', 'Kathleen', 'Pamela', 'Martha', 'Debra', 'Amanda', 'Stephanie', 'Carolyn', 'Christine', 'Marie', 'Janet', 'Catherine', 'Frances', 'Ann', 'Joyce', 'Diane', 'Alice', 'Julie', 'Heather', 'Teresa', 'Doris', 'Gloria', 'Evelyn', 'Jean', 'Cheryl', 'Mildred', 'Katherine', 'Joan', 'Ashley', 'Judith', 'Rose', 'Janice', 'Kelly', 'Nicole', 'Judy', 'Christina', 'Kathy', 'Theresa', 'Beverly', 'Denise', 'Tammy', 'Irene', 'Jane', 'Lori', 'Rachel', 'Marilyn', 'Andrea', 'Kathryn', 'Louise', 'Sara', 'Anne', 'Jacqueline', 'Wanda', 'Bonnie', 'Julia', 'Ruby', 'Lois'];

/* 

                        NAMES

*/

//index = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min // calback function( return Nan)
/* 
                good name generator
*/
// const gName = ( ) => 
// {
//     let getRandomInRange = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//   // let nr = getRandomInRange(0, 100);  // random number in range at 0 for 100
//   return firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)]
// }
/* 
                bad email generator
*/
/* 
                use default vocabulary
*/
var name = function name() {
  var badSymbols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : badPattern;

  var fullName = '',
      getRandomInRange = function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  fullName = firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)];

  return fullName.replace(fullName.charAt(getRandomInRange(0, fullName.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)));
};
 //, customName

var emailDomens = ['mail.ru', 'tut.by', 'yandex.ru', 'ok.ru', 'zmail.ru', 'ru.ru', 'hotmail.ru', 'gmail.com', 'usa.net', 'lenta.ru', 'rambler.ru', 'outlookmail.com', 'mailcity.com', 'newmail.net', 'yahoo.com', 'iname.com', 'bigfoot.com', 'apexmail.com'];

/* 
                      EMAIL  

*/
/* 
                good email generator
*/
// let gEmail = () => {
//     // let nrName = getRandomInRange(0, 100), // random number in range at 0 for 100
//     //     nrEmail = getRandomInRange(0, 25) ;// random number in range at 0 for 25

//     let   getRandomInRange = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };

//     return firstName[ getRandomInRange(0, 100)] + secondName[ getRandomInRange(0, 100)] + '@' + emailDomen[getRandomInRange(0, 25)]
// }
/* 
                bad email generator
*/
/* 
                use default vocabulary
*/
var email = function email() {
                var badSymbols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : badPattern;

                var fullEmail = '',
                    fullName = '',
                    getRandomInRange = function getRandomInRange(min, max) {
                                return Math.floor(Math.random() * (max - min + 1)) + min;
                };

                fullName = firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)];
                fullName = fullName.replace(fullName.charAt(getRandomInRange(0, fullName.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)));

                return fullEmail = fullName + '@' + emailDomens[getRandomInRange(0, 25)];
};
 //, customEmail

/* 

                            PHONES

*/
/* 
                good phone generator
*/
// let gPhone = (codeCountry = 375, howNumberAfter = 8 ) => {
//   let telephoneNumber = [],
//       getRandomInRange = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//       };

//   telephoneNumber.push(codeCountry);

//   for (let index = 0; index < howNumberAfter; index++) {
//       telephoneNumber.push(getRandomInRange(0, 9))
//    }

//    return telephoneNumber.join('');
// }
/* 
                bad email generator
*/
/* 
                use default vocabulary
*/
var phone = function phone() {
                var codeCountry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375;
                var howNumberAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
                var badSymbols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : badPattern;

                var telephoneNumber = [],
                    getRandomInRange = function getRandomInRange(min, max) {
                                return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                telephoneNumber.push(codeCountry);

                for (var index = 0; index < howNumberAfter; index++) {
                                telephoneNumber.push(getRandomInRange(0, 9));
                }

                telephoneNumber = telephoneNumber.join('');

                return telephoneNumber.replace(telephoneNumber.charAt(getRandomInRange(0, telephoneNumber.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)));
};
 //, customPhone

/* 


            optimal length 1000 symbols
*/

var text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

/* 
                        TEXT

*/
/* 
                good text generator
*/
// let gText = (howSymbol = 500 ) => {
//     // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
//     return textData.substring(0, howSymbol); 
// }
/* 
                bad email generator
*/
/* 
                use default vocabulary
*/
var text$1 = function text$$1() {
                var howSymbol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
                var badSymbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : badPattern;

                // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
                var text$$1 = text.substring(0, howSymbol);

                var getRandomInRange = function getRandomInRange(min, max) {
                                return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                return text$$1.replace(text$$1.charAt(getRandomInRange(0, text$$1.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)));
};
 //, customText

/* 
                                     good generator 
*/
/* use for custom vocabulary */
// import {customName}  from './lib/name.js';
// import {customEmail} from './lib/email.js';
// import {customPhone} from './lib/phone.js';
// import {customText} from  './lib/text.js';
/* 
          
                Так выглядит обьект с методами, методы импортировать из других файлов.

*/
/* 
                        Хороший обьект( валидный)
*/
// let goodGen = {
//   gName,
//   gEmail,
//   gPhone,
//   gText
// };
// console.log(goodGen.gName());
// console.log(goodGen.gEmail());
// console.log(goodGen.gPhone);
// console.log(goodGen.gText);
/* 
                        Нехороший обьект(не валидный)
*/
var badGen = {
                        /* работают по дефолту */
                        name: name,
                        email: email,
                        phone: phone,
                        text: text$1
                        /*  принимают кастомный словарь */
                        // customName,
                        // customEmail,
                        // customPhone,
                        // customText
};

// console.log(badGen.name());
// console.log(badGen.email());
// console.log(badGen.phone());
// console.log(badGen.text());
// export { badGen}; //, goodGen


// ьаги 


/* 
мыло валидное на выходе

*/

module.exports = badGen;
