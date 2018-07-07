/**
 * @description  TEXT
 */
import badPattern from '../data/bad_pattern'; // bad(non-valid symbols)
import textData from '../data/text_fish.js'; // data-array
/**
 * @description good text generator
 */
const gText = (howSymbol = 500) => {
  // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
  return textData.substring(0, howSymbol);
};
/**
 * @description bad text generator
 */
/**
 * @description use default vocabulary
 */
const bText = (howSymbol = 500, badSymbols = badPattern) => {
  // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
  const text = textData.substring(0, howSymbol);

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  };
  return text.replace(text.charAt(getRandomInRange(0, text.length)), badSymbols.charAt(getRandomInRange(0, badSymbols.length)))
};
/**
 *  @description use custom vocabulary
 */
// let customText = (howSymbol = 500 ) => {

// }
export { bText, gText }; // customText
