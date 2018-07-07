/**
 * @description PHONES
 */
import badPattern from '../data/bad_pattern'; // bad(non-valid symbols)
/**
 * @description good phone generator
 */
const gPhone = (codeCountry = 375, howNumberAfter = 8) => {
  const telephoneNumber = [];
  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  };

  telephoneNumber.push(codeCountry);

  for (let index = 0; index < howNumberAfter; index++) {
    telephoneNumber.push(getRandomInRange(0, 9))
  }
  return telephoneNumber.join('');
};
/**
 * @description bad phone generator
 */
/**
 * @description use default vocabulary
 */
const bPhone = (codeCountry = 375, howNumberAfter = 8, badSymbols = badPattern) => {
  let telephoneNumber = [];
  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  };
  telephoneNumber.push(codeCountry);

  for (let index = 0; index < howNumberAfter; index++) {
    telephoneNumber.push(getRandomInRange(0, 9));
  }
  telephoneNumber = telephoneNumber.join('');

  return telephoneNumber.replace(telephoneNumber.charAt(getRandomInRange(0, telephoneNumber.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)))
};
/**
 *  @description use custom vocabulary
 */
// let phone = (codeCountry = 375, howNumberAfter = 8 ) => {
// }
export { bPhone, gPhone }; // customPhone
