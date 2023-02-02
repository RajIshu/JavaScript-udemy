/*
Data types:
----------
    - A value in JavaScript is always of a certain type. For example, a string or a number.
    
    - A Value can be of two types:
        • Object: used to store collections of data and more complex entities.

        • Primitive: can contain or store only a single thing.


    - There are seven primitive data types in JavaScript:
        1) Number:
            - The number type represents both integer and floating point numbers.
            - There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
            - Besides regular numbers, there are so-called “special numeric values”:
                • Infinity
                    + It represents the mathematical Infinity ∞.
                    + It is a special value that’s greater than any number.
                    + We can get it as a result of division by zero.
                        For Example:
                            alert( 1 / 0 ); // Infinity

                • -Infinity
                    
                • NaN
                    + It represents a computational error. 
                    + It is a result of an incorrect or an undefined mathematical operation
                        For Example:
                            alert( "not a number" / 2 ); //  NaN, such division is erroneous
                    + Mathematical operation on NaN returns NaN.
                        For Example:
                            alert( NaN + 1 ); // NaN
                            alert( 3 * NaN ); // NaN
                    
                    NOTE: NaN ** 0 is 1 (Exception)


        2) BigInt:
            - In JavaScript, the “number” type cannot safely represent integer values larger 
              than (2^53 - 1) or less than -(2^53 - 1) for negatives.
                => (2^53 - 1) is equal to 9007199254740991
              
              For Example:
                console.log(9007199254740991 + 1); // 9007199254740992  --> EVEN
                console.log(9007199254740991 + 2); // 9007199254740992  --> EVEN

              So to say, all odd integers greater than (2^53 - 1) can’t be stored at all in the “number” type.

              To overcome this issue, BigInt was introduced.          
            
            - A BigInt value is created by appending n to the end of an integer.
              For Example:
                // the "n" at the end means it's a BigInt
                const bigInt = 1234567890123456789012345678901234567890n;


        3) String:
            - A string in JavaScript must be surrounded by quotes.
              
              In JavaScript, there are 3 types of quotes.
                • Double quotes:    "Hello".
                • Single quotes:    'Hello'.
                • Backticks:        `Hello`.

            - Double and single quotes are “simple” quotes. There’s practically no 
              difference between them in JavaScript.
            
            - Backticks allow us to embed variables and expressions into a string 
              by wrapping them in ${…}.
              The expression inside ${…} is evaluated and the result becomes a 
              part of the string.

              For Example:
                let name = "John";
                // embed a variable
                alert( `Hello, ${name}!` ); // Hello, John!

                // embed an expression
                alert( `the result is ${1 + 2}` ); // the result is 3
            
            NOTE: There is no character type in JavaScript. A string may consist of 
                  zero characters (be empty), one character or many of them.


        4) Boolean (logical type):
            - The boolean type has only two values: true and false.

            - Boolean values also come as a result of comparisons.
              For Example:
                let isGreater = 4 > 1;
                alert( isGreater ); // true


        5) Undefined:
            - The meaning of undefined is “value is not assigned”.

            - If a variable is declared, but not assigned, then its value is undefined.
              For Example:
                let age;
                alert(age); // shows "undefined"



        6) Null:
            - It’s a special value which represents “nothing”, “empty” or “value unknown”.
            
            NOTE:
                There is a bug in case of 'null'.
                When we try to find the type of 'null' value then it always gives 'object' as type instead of null.
                For example:
                    console.log(typeof null); // object
                
                However, this bug is never corrected for legacy reasons i.e., compatibility.


        7) Symbol:
            - Value that is unique and cannot be changed.
         

Dynamic typing:
--------------
    - It doesn't require to manually define variable data type at the time of declaring it.
    - Data type is automatically defined at the runtime i.e., the interpreter assigns 
      variables a type at runtime based on the variable's value.


NOTE: Value has the type not the variable.


'typeof' Operator:
-----------------
  - It returns the type of the operand as String.
  - You may also come across another syntax: typeof(x). It’s the same as typeof x.
    
    For Example:
      typeof Math // "object" --> Math is a built-in object that provides mathematical operations.
      typeof null // "object"
      typeof alert // "function" --> alert is a function. 


'let', 'var', and 'const':
-------------------------
  1) let:
      - used when we have to change value of the variable later in the program.
      - mutate or reassigning
      - declaring empty variable
        For Example:
          let javascriptIsFun = true;
          let numOne = 1;

  2) const:
      - value for the const variable cannot be changed.
      - immutable variable - value cannot be mutated.
      - cannot declare empty variable, it must be intialized.
        For Example:
          const birthYear = 2001;                
  
  3) var:
      - this should be completely avoided (avoid using it).
      - old way of defining variable (prior to ES6).
      - works same as 'let' (but they are still different, we will talk about it later).
        For Example:
          var job = 'programmer';

  NOTE: We can also use a variable withour declaring it (But it is not a good idea).
        For Example:
              lastName = 'Ishu Raj';
              console.log(lastName);

*/

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
// Remember, it's value that hold the data type not the variable.
// So, we can change the value of the above variable.

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Undefined Data Type
let year;
console.log(year);
console.log(typeof year);

// Bug in JavaScript
console.log(typeof null); // It returns 'object' instead of 'null'

// BigInt at Rescue (Only Even numbers are stored not odd numbers after 9007199254740991)
console.log("1: " + (9007199254740991 + 1)); // 9007199254740992 --> EVEN
console.log("2: " + (9007199254740991 + 2)); // 9007199254740992 --> EVEN
console.log("3: " + (9007199254740991 + 3)); // 9007199254740994 --> EVEN
console.log("4: " + (9007199254740991 + 4)); // 9007199254740996 --> EVEN
console.log("5: " + (9007199254740991 + 5)); // 9007199254740996 --> EVEN
console.log("6: " + (9007199254740991 + 6)); // 9007199254740996 --> EVEN
console.log("7: " + (9007199254740991 + 7)); // 9007199254740998 --> EVEN
console.log("8: " + (9007199254740991 + 8)); // 9007199254741000 --> EVEN
console.log("9: " + (9007199254740991 + 9)); // 9007199254741000 --> EVEN
console.log("10: " + (9007199254740991 + 10)); // 9007199254741000 --> EVEN

// n is used for defining BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);


// Using variable without declaring it
lastName = 'Ishu Raj';
console.log(lastName);