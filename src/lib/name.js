/* 

                        NAMES

*/

import badArray   from '../data/bad_array';     // bad(non-valid symbols)
import firstName  from '../data/first_name';    // data-array
import secondName from '../data/second_name';   // data-array

//index = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min // calback function( return Nan)
/* 
                good name generator
*/
// const goodName = ( ) => 
// {
//     let getRandomInRange = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
  
//   // let nr = getRandomInRange(0, 100);  // random number in range at 0 for 100
//   return firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)]
// }
/* 
                use default vocabulary
*/
const name = ( ) => 
{
    let getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
  // let nr = getRandomInRange(0, 100);  // random number in range at 0 for 100
  return firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)]
}

/* 
              use custom vocabulary
*/
// const customName = (customSymbols ) => 
// {
//     let getRandomInRange = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
  
//   // let nr = getRandomInRange(0, 100);  // random number in range at 0 for 100
//   return firstName[getRandomInRange(0, 100)] + secondName[getRandomInRange(0, 100)]
// }
  
export default name(); //goodName()
// export default { name, customName};
