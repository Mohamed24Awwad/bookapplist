//                      "use strict";
//  /*  
//       _                    ____            _       _     _____         _        
//     | | __ ___   ____ _  / ___|  ___ _ __(_)_ __ | |_  |_   _|_ _ ___| | _____ 
//  _  | |/ _` \ \ / / _` | \___ \ / __| '__| | '_ \| __|   | |/ _` / __| |/ / __|
// | |_| | (_| |\ V / (_| |  ___) | (__| |  | | |_) | |_    | | (_| \__ \   <\__ \
//  \___/ \__,_| \_/ \__,_| |____/ \___|_|  |_| .__/ \__|   |_|\__,_|___/_|\_\___/
//                                            |_|                        
// */
// /**
//  * =================================Task #01 ==============================================
//    ======================Check If The Number Is Even Or Odd================================
//    ========================================================================================*/

      let numType = (value) => {
        if (value % 2 == 0) {
          return `${value} Is an Even Number`;
        } else if (value % 2 !== 0) {
          return `${value} Is an Odd Number`;
        } else {
          return "Nothing Exisiting";
        }
      };
      console.log(numType(10));
      console.log(numType(11));
// /**
//  * =================================Task #02 ============================================
//    ========================Check The Number Is Prime Or Not==============================
//    ======================================================================================*/

      let primeNumbers = (num) => {
        if (num === 1) {
          return `${num} Is Not A Prime Number`;
        } else if (num === 2) {
          return `${num} Is A Prime Number`;
        } else {
          for (var modules = 2; modules < num; modules++) {
            if (num % modules === 0) {
              return `${num} Is Not A Prime Number`;
            }
          }
        }
        return `${num} Is A Prime Number`;
      };
      console.log(primeNumbers(164));

// /**
//  * =================================Task #03 ============================================
//    =============================Reverse A Number =======================================
//    ======================================================================================*/
 
      let reversNumbers = (numbers) => {
        let num = [];
        for (let letters of numbers) {
          num.reverse(letters);
        }
        return num;
      };
      console.log(reversNumbers([1, 2, 3, 4, 5]));
// /**
//  * =================================Task #04 ============================================
//    ===================Compute Rectangle Area And Circumference ==========================*/

    
  






//    /**
//  * =================================Task #05 ============================================
//    =======================Compute Factorial of Nunumber==================================
//    ======================================================================================*/

   let factorial = (num) => {
     let result = num;
     if (num === 0 || num === 1) return `(${num}) Is not a valid Number `;
     while (num > 1) {
       num--;
       result *= num;
     }
     return result;
   };
   console.log(factorial(1));





   // recursive function 
   function factorial(num){
     if (n ===1 ){
       return 1;
     }
     return num * factorial (num-1);
   }

//  /** ==============================  Task 6 ===============================================
//   *  ============================= Pattern  ===============================================           
//   * =======================================================================================
//  */
      for (var i = 0; i < 5; i++) {
        for (var k = 0; k <= i; k++) {
          document.write("*");
        }
        document.write("<br>");
      }
//=============================== Another Solution with Repeat (string method).============
      for (var l = 0; l < 6; l++) {
        console.log("*".repeat(l));
      }
