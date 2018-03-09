/* 

                            PHONES

*/

import badArray from '../data/bad_array';     // bad(non-valid symbols)
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
let phone = (codeCountry = 375, howNumberAfter = 8 ) => {
  let telephoneNumber = [],
      getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

  telephoneNumber.push(codeCountry);

  for (let index = 0; index < howNumberAfter; index++) {
      telephoneNumber.push(getRandomInRange(0, 9))
   }
  
   return telephoneNumber.join('');
}

/* 
              use custom vocabulary
*/
let phone = (codeCountry = 375, howNumberAfter = 8 ) => {
  let telephoneNumber = [],
      getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

  telephoneNumber.push(codeCountry);

  for (let index = 0; index < howNumberAfter; index++) {
      telephoneNumber.push(getRandomInRange(0, 9))
   }
  
   return telephoneNumber.join('');
}




export  { phone , gPhone , customPhone}; 