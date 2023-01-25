/* 
What is JavaScript?
------------------
    - JavaScript was initially created to “make web pages alive".

    - The programs in this language are called scripts. 
  
    - Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

    - JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

History:
-------
    - When it was created it was given a name "LiveScript".

    - But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.
      So, we can say there is no relation between JavaScript and Java.


JavaScript Engines:
------------------      
    - Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

    - The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

    - Different engines have different “codenames”. 
      For example:
            • V8 – in Chrome, Opera and Edge.
            • SpiderMonkey – in Firefox.


The Modern Mode (or Strict Mode):
--------------------------------
    - In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'.

    - With strict mode, you can not use undeclared variables.

    - It helps you to write cleaner code, like preventing you from using undeclared variables.

    - Declaring Strict Mode:
      ---------------------
            • Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
            • Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
            • Ensure that “use strict” is at the top:
              --------------------------------------
                    + Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
                    + For Example:
                            alert("some code");
                            // "use strict" below is ignored--it must be at the top

                            "use strict";
                            // strict mode is not activated
    
    - Not Allowed in Strict Mode:
      --------------------------
            • Using a variable (or Object), without declaring it, is not allowed.

            • Deleting a variable (or object) is not allowed.
              For Example:
                    "use strict";
                    let x = 3.14;
                    delete x;           // This will cause an error

            • Deleting a function is not allowed.

            • Duplicating a parameter name is not allowed.
              For Example:
                    "use strict";
                    function x(p1, p1) {};   // This will cause an error

            • Octal numeric literals are not allowed.
              For Example:
                    "use strict";
                    let x = 010;             // This will cause an error

            • Octal escape characters are not allowed.
              For Example:
                    "use strict";
                    let x = "\010";            // This will cause an error


            and many more to go......


Variable:
--------
    - A variable is a “named storage” for data.

    - To create a variable in JavaScript, use the 'let' keyword.

    - Ways of declaring variables:
      ---------------------------
            • Multiline variant:
              -----------------
                    let user = 'John';
                    let age = 25;
                    let message = 'Hello';

            • Single Line variant:
              -------------------
                    let user = 'John', age = 25, message = 'Hello';

            • Multiple variables in Multiline Style:
              -------------------------------------
                    let user = 'John',
                       age = 25,
                       message = 'Hello';

            • “comma-first” Style:
              -------------------
                    let user = 'John'
                       , age = 25
                       , message = 'Hello';
         
                       
    - In older scripts, you may also find another keyword: 'var' instead of 'let'.
*/

let js = 'amazing'; // Variable Declaration
if(js === 'amazing') alert("JavaScript is FUN!");

40 + 8 + 23 - 10 // It will be not visible anywhere

// we have to define where we want to see the result
console.log(40 + 8 + 23 - 10); // It will print the result in brower console window 
console.log('Ishu');
console.log(23);

/* 
VALUES (in these lines of code):
------------------------------- 
    console.log(23); --> 23
    console.log('Ishu'); --> 'Ishu'
    console.log(40 + 8 + 23 - 10); --> 40, 8, 23, 10
        --> These Mathematical operator combine these values to form ONE value i.e., 61.

VARIABLES:
---------
    - Values can be stored in Variables so that we can reuse them over and over again.

*/

// Declaring a VARIABLE:
let firstName = 'Ishu';
console.log(firstName);
console.log(firstName);
console.log(firstName);


/*
Naming Convention for Variables:
------------------------------
1. camelCase : 
    - firstName, theCompleteJavaScriptCourse

   snake_case:
    - first_name, the_complete_javascript_course

2. No start with digit or numeric values or number
   Eg: 3years, 2boys, etc.
   
3. Variable names can include numbers, letters, underscores, dollar sign.

4. Don't use Reserved JavaScript keywords.
   Eg: let, function, new, etc. 

5. Never start variable name with uppercase letters. (They are used in OOPs)
   Eg: Person, FirstName, etc.

6. Variables in all UpperCase are Constants.
   Eg: PI (= 3.141592653589793),
       SQRT2 (= 1.4142135623730951),
       E (= 2.718281828459045), etc.

7. Variable name should be meaningful.
   Eg:
    Good Way:
        let myFirstJob = 'Programmer';
        let myFirstJob = 'Teacher';
    Bad Way:
        let job1 = 'Programmer';
        let job2 = 'Teacher';

8. These names are valid:
   Eg:
    let $ = 1; // declared a variable with the name "$"
    let _ = 2; // and now a variable with the name "_"

    alert($ + _); // 3

9. Variables named apple and APPLE are two different variables.

10. Non-Latin letters are allowed, but not recommended.
    Eg:
        let имя = '...';
        let 我 = '...';
*/