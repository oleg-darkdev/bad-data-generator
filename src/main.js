/* 
                                     g generator 
*/
import {gName}  from './lib/name.js';
import {gEmail} from './lib/email.js';
import {gPhone} from './lib/phone.js';
import {gText}  from  './lib/text.js';
/* 
                                     bad generator 
*/
/* for default vocabulary */
import {name}  from './lib/name.js';
import {email} from './lib/email.js';
import {phone} from './lib/phone.js';
import {text }from  './lib/text.js';

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


/* 
                        Хороший обьект( валидный)
*/
let goodGen = {
  gName,
  // gEmail,
  // gPhone,
  // gText
};
console.log(goodGen.gName());
// console.log(goodGen.gEmail());
// console.log(goodGen.gPhone);
// console.log(goodGen.gText);



/* 
                        Нехороший обьект(не валидный)
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

// console.log(badGen.name);
// console.log(badGen.email);
// console.log(badGen.phone);
// console.log(badGen.text);