/* 
                      EMAIL  

*/
// export default { email, customEmail };

import badArray     from '../data/bad_array';       // bad(non-valid symbols)
import emailDomen   from '../data/email_domen';     // data-array
import firstName    from '../data/first_name';      // data-array 
import secondName   from '../data/second_name';     // data-array 
/* 
                good email generator
*/
// let goodEmail = () => {
//     // let nrName = getRandomInRange(0, 100), // random number in range at 0 for 100
//     //     nrEmail = getRandomInRange(0, 25) ;// random number in range at 0 for 25

//     let   getRandomInRange = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };
      
//     return firstName[ getRandomInRange(0, 100)] + secondName[ getRandomInRange(0, 100)] + '@' + emailDomen[getRandomInRange(0, 25)]
// }

/* 
                use default vocabulary
*/
let email = () => {
    // let nrName = getRandomInRange(0, 100), // random number in range at 0 for 100
    //     nrEmail = getRandomInRange(0, 25) ;// random number in range at 0 for 25

    let   getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
      
    return firstName[ getRandomInRange(0, 100)] + secondName[ getRandomInRange(0, 100)] + '@' + emailDomen[getRandomInRange(0, 25)]
}
/* 
              use custom vocabulary
*/ 
//   let customEmail = () => {
//     let nrName = getRandomInRange(0, 100), // random number in range at 0 for 100
//         nrEmail = getRandomInRange(0, 25) ;// random number in range at 0 for 25  
  
//       return firstName[nrName] + secondName[nrName] + '@' + emailDomens[nrEmail]
//   }



export default  email(); //goodEmail()
