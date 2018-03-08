/* 
                        TEXT

*/

import badArray from '../data/bad_array';       // bad(non-valid symbols)
import textData from '../data/text_fish.js';         // data-array

/* 
                use default vocabulary
*/
let text = (howSymbol = 500 ) => {
    // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
    return textData.substring(0, howSymbol); 
}
/* 
              use custom vocabulary
*/
// let customText = (howSymbol, customSymbols) => {
//     // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент, добавляет символы из пользовательского шаблона
//     return 
// }



export default text() ;
// export { text , customText };
