/**
 * @description EMAIL
 */
import badPattern from '../data/bad_pattern'; // bad(non-valid symbols)
import emailDomen from '../data/email_domen'; // data-array
import firstName from '../data/first_name'; // data-array
import secondName from '../data/second_name'; // data-array
/**
 * @description good email generator
 */
const gEmail = () => {
  // let nrName = getRandomInRange(0, 100), // random number in range at 0 for 100
  //     nrEmail = getRandomInRange(0, 25) ;// random number in range at 0 for 25

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  };
  return `${firstName[getRandomInRange(0, 100)]}${secondName[getRandomInRange(0, 100)]}@${emailDomen[getRandomInRange(0, 25)]}`;
};
/**
 * @description bad email generator
 */
/**
 * @description use default vocabulary
 */
const bEmail = (badSymbols = badPattern) => {
  let fullEmail = '';
  let fullName = '';
  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  };

  fullName = firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)];
  fullName = fullName.replace(fullName.charAt(getRandomInRange(0, fullName.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)))

  fullEmail = `${fullName}@${emailDomen[getRandomInRange(0, 25)]}`;
  return fullEmail
};
/*
              use custom vocabulary
*/
// let customEmail = () => {
// }
export { bEmail, gEmail }; // customEmail
