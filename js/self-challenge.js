/*
================================Task One ===========================================================================

Implement the removeProperty function that takes an object and a property name 
and does the following:

If object obj has property prop, it removes the property from the object. 
If the property has been removed, it returns true; otherwise it returns false.
*/
//==================================Solution=================================
/**-----
 * Tips
 * -----
 * hasOwnProperty(); method is often usedw wit h the object to make sure that object has 
 * its own property and without inhertince from another object 
 * 
 * delete();
 * ---------
 * is a method thet uses to delete object propertities
*/
                  function removeProperty(obj, prop) {
                  if (obj.hasOwnProperty(prop)) {
                     console.log(obj);
                     delete obj["prop"];
                     return true;
                  } else {
                     return false;
                  }
                  }

                  var obj = {
                  name: "John",
                  };
                  removeProperty(obj, "name");
   /**
    * =====================================================================
    * ============================= Task 02================================
    * =====================================================================
    * 
    * Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
    For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

    ====================Hint ==============================================
    String#split() the date on / and then concat the generated date, month and year.
    */

               let AddLeadingZero =(num)=> {
               return (num < 10 ? "0" : "") + num;
               }
               function formatDate(userDate) {
               let [month, day, year] = userDate.split("/");
               return year + AddLeadingZero(month) + AddLeadingZero(day);
            }
               console.log(formatDate("12/31/2014"));
               console.log(formatDate("10/1/2014"));



/* -------------------------------------------------------------------------- */
/*                            Astriks In JavaScript                           */
/* -------------------------------------------------------------------------- */

outerLoop: for(let i = 0 ; i < 5 ; i++){
   console.log("*".repeat(i));
}


         /** --------------

                 *
                **
               ***
              ****
             *****
            ******
           *******
          ********
         *********


         ----------------*/

         let y = 10;
         let x = 10;

         let str = "";

         for(let i = 1; i < y; i++ ){
             for(let j = 1; j < x; j++){
                 if(i + j >= y){
                     str = str.concat("*");
                 }else{
                     str = str.concat(" ")
                 }
             }
             str = str.concat("\n")
         }

         console.log(str)


         /**_______________________



         *********
          ********
           *******
            ******
             *****
              ****
               ***
                **
                 *


          _______________________*/

         let str2 = "";

         for(let i = 1; i < y; i++ ){
             for(let j = 1; j < x; j++){
                 if(i <= j ){
                     str2 = str2.concat("*");
                 }else{
                     str2 = str2.concat(" ")
                 }
             }
             str2 = str2.concat("\n")
         }

         console.log(str2)


         /**----------------------


         *
         **
         ***
         ****
         *****
         ******
         *******
         ********


          -------------------------*/


         let str3 = "";

         for(let i = 1; i < y; i++ ){
             for(let j = 1; j < x; j++){
                 if(i >= j ){
                     str3 = str3.concat("*");
                 }
             }
             str3 = str3.concat("\n")
         }

         console.log(str3)

         /**-------------------------


          *********
          ********
          *******
          ******
          *****
          ****
          ***
          **
          *

          ---------------------------*/
         let str4 = "";

         for(let i = 1; i < y; i++ ){
             for(let j = 1; j < x; j++){
                 if( j >= i ){
                     str4 = str4.concat("*");
                 }
             }
             str4 = str4.concat("\n")
         }

         console.log(str4)

         /**--------------------
          Diamond of Asterisks

              *
             ***
            *****
           *******
          *********
           *******
            *****
             ***
              *


          ---------------------*/

         let str5 = "";

         for(let i = 1; i < y; i++ ){
             for(let j = 1; j < x; j++){
                 if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
                     str5 = str5.concat("*");
                 }else if(i >= y / 2
                   && j > ((y / 2) -  i) * (-1)
                   && j < (y - ((y / 2) -  i) * (-1))){
                     str5 = str5.concat("*");
                 }
                 else {
                     str5 = str5.concat(" ");
                 }
             }
             str5 = str5.concat("\n");
         }

         console.log(str5)


/* -------------------------------------------------------------------------- */
/*                             HackerRank Problems                            */
/* -------------------------------------------------------------------------- */

/*Task 2 - Try, Catch, and Finally
Complete the reverseString function; it has one parameter, s. You must perform the following actions:
Try to reverse string s using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's message on a new line.
Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.*/

function reverseString(s) {
 if (typeof s === "string") {
   console.log(
     s
       .split("")
       .reverse()
       .join("")
   );
 } else {
   console.log("s.split is not a function" + "\n" + s);
 }
}