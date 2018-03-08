/* 

                            PHONES

*/

import badArray from '../data/bad_array';     // bad(non-valid symbols)

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
// let customPhone = (codeCountry, howNumberAfter, customSymbols ) => {
//     let telephoneNumber += codeCountry;
//     for (let index = 0; index < howNumberAfter; index++) {
//       let nr = getRandomInRange(0, 9);          // random number in range at 0 for 100
//       telephoneNumber += nr
//    }
//       return telephoneNumber
// } 




export default phone();
// export { phone, customPhone };
