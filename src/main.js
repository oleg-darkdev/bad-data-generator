/**
 * @description good generator
 */
import { gName } from './src/lib/text';
import { gEmail } from './src/lib/text';
import { gPhone } from './src/lib/text';
import { gText } from './src/lib/text';
/**
 * @description bad generator
 */
/* use for default vocabulary */
import { bName } from './src/lib/name';
import { bEmail } from './src/lib/email';
import { bPhone } from './src/lib/phone';
import { bText } from './src/lib/text';
/* use for custom vocabulary */
// import {customName} from './src/lib/name.js';
// import {customEmail} from './src/lib/email.js';
// import {customPhone} from './src/lib/phone.js';
// import {customText} from './src/lib/text';
/**
 * @description Нехороший обьект(не валидный)
 */
/*  принимают кастомный словарь */
// customName,
// customEmail,
// customPhone,
// customText
const badGen = {
  bName,
  bEmail,
  bPhone,
  bText,
  gName,
  gEmail,
  gPhone,
  gText
};

// console.log(badGen.bName());
// console.log(badGen.bEmail());
// console.log(badGen.bPhone());
// console.log(badGen.bText());

// console.log(badGen.gName());
// console.log(badGen.gEmail());
// console.log(badGen.gPhone());
// console.log(badGen.gText());

// console.log(badGen.customName());
// console.log(badGen.customEmail());
// console.log(badGen.customPhone());
// console.log(badGen.customText());


export default badGen;
