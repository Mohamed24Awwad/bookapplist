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