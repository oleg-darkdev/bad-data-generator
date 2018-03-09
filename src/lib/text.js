/* 
                        TEXT

*/

import badPattern   from '../data/bad_pattern';     // bad(non-valid symbols)
import textData from '../data/text_fish.js';         // data-array
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
let text = (howSymbol = 500 ) => {
    // укарачивает весь текст из массива по дефолту  до 500 символов, если не передан аргумент.
    return textData.substring(0, howSymbol); 
}
/* 
              use custom vocabulary
*/
let customText = (howSymbol = 500 ) => {

}


export  { text, gText, customText }; 
