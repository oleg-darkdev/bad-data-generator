/* for default vocabulary */
import name  from './lib/name.js';
import email from './lib/email.js';
import phone from './lib/phone.js';
import text from  './lib/text.js';

/* for custom vocabulary */
// import {customName}  from './lib/name.js';
// import {customEmail} from './lib/email.js';
// import {customPhone} from './lib/phone.js';
// import {customText} from  './lib/text.js';

// import phone  from './spec/lib/test.js';
// import test from '/lib/test.js';

/* 
          
                Так выглядит обьект с методами, методы импортировать из других файлов.

*/

// let badGen = {
//   /* работают по дефолту */
//   // name()
//   name,
//   email,
//   phone,
//   text

// //   /*  принимают кастомный словарь */
// //   customName(),
// //   customEmail() ,
// //   customPhone(),
// //   customText()
// };


let goodGen = {
  /* работают по дефолту */
  // name()
  name,
  email,
  phone,
  text

//   /*  принимают кастомный словарь */
//   customName(),
//   customEmail() ,
//   customPhone(),
//   customText()
};





// console.log(badGen.name);
// console.log(badGen.email);
console.log(badGen.phone);
// console.log(badGen.text);