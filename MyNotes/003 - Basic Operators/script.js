/*
Operators:
---------
    - allows us to tranform values or combine multiple values.


Operands:
--------
    - It  is what operators are applied to.
    - also known as 'arguments'.
    

Types of Operators (on the basis of Operands):
---------------------------------------------
    1) Unary Operator:
        - Opeartor has a single operand.

          For Example:
            let x = 1;
            x = -x;
            alert( x ); // -1, unary negation was applied

    2) Binary Operator:
        - Operator has two operands.

          For Example:
            let x = 1, y = 3;
            alert( y - x ); // 2, binary minus subtracts values


Types of Operators:
------------------
    1) Mathematical Operators or Arithmetic Operators:
        • Addition +
        • Subtraction -
        • Multiplication *
        • Division /

        • Remainder %
            For Example:
                alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
                alert( 8 % 3 ); // 2, the remainder of 8 divided by 3

        • Exponentiation **
            For Example:
                alert( 2 ** 2 ); // 2² = 4
                alert( 2 ** 3 ); // 2³ = 8

            - We can use ** to find root of any number.
              For Example:
                alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
                alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


        ➤ String Concatenation using '+':
            - When the binary '+' is applied to strings, it merges (concatenates) them.
              
              For Example:
                let s = "my" + "string";
                alert(s); // mystring

            - If any of the operands is a string, then the other one is converted to a string too.
              
              For Example:
                alert( '1' + 2 ); // "12"
                alert( 2 + '1' ); // "21"

              NOTE: Whenever the Interpreter finds even a single string as operand to '+' operator, it 
                    concatenate other or rest operands with it.

                    For Example:
                        a) alert(2 + 2 + '1' ); // "41" and not "221" because the interpreter finds string at 3rd position as operand.
                        b) alert('1' + 2 + 2); // "122" and not "14" because the first operand is a string, the interpreter treats the other two operands as strings too.


              NOTE: The binary '+' is the only operator that supports strings in such a way. Other 
                    arithmetic operators work only with numbers and always convert their operands to numbers.

                    For Example:
                        a) alert( 6 - '2' ); // 4, converts '2' to a number
                        b) alert( '6' / '2' ); // 3, converts both operands to numbers


    2) typeof Operator:
        - It returns the type of the operand as String.
        - You may also come across another syntax: typeof(x). It’s the same as typeof x.
            
          For Example:
            typeof Math // "object" --> Math is a built-in object that provides mathematical operations.
            typeof null // "object"
            typeof alert // "function" --> alert is a function.


    3) Assignment Operator (=):
        - It is used for assigning value to variable.
          For Example:
            let x = 2 * 2 + 1;
            alert( x ); // 5

        - Assignment (=) operator returns a value:
            ➜ All operators in JavaScript return a value. That’s obvious for + and -, but also true for =. 
            ➜ The call x = value writes the value into x and then returns it.
               
               For Example:
                    let a = 1;
                    let b = 2;
                    let c = 3 - (a = b + 1);
                    alert( a ); // 3
                    alert( c ); // 0


        - Chaining Assignment:
            ➜ For Example:
                    let a, b, c;
                    a = b = c = 2 + 2; // Chaining Assignment
                    alert( a ); // 4
                    alert( b ); // 4
                    alert( c ); // 4

            ➜ Chained assignments evaluate from right to left.


        - 'modify-and-assign' Operators:
            ➜ +=, -=, *=, /=

            ➜ For Example:
                    let n = 2;
                    n += 5; // now n = 7 (same as n = n + 5)
                    n *= 2; // now n = 14 (same as n = n * 2)
                    alert( n ); // 14


        - Increment/decrement Operator:
            ➜ Increment (++): increases a variable by 1
               Decrement (--): decreases a variable by 1
            
            ➜ For Example:
                    let num = 2;
                    num++;  // works the same as num = num + 1, but is shorter
                    alert( num ); // 3

            ➜ Increment/decrement can only be applied to variables. Trying to 
               use it on a value like 5++ will give an error.


    4) Comparison Operator:
        - Greater/less than:            a > b, a < b.
          Greater/less than or equals:  a >= b, a <= b.
          Equals:                       a == b.
          Not equals:                   a != b.

        - All comparison operators return a boolean value.

        - String Comparison:
            • To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
                ➝ Lexicographical order  is popularly known as Dictionary order.
            
            • In other words, strings are compared letter-by-letter.

              For Example:
                alert( 'Z' > 'A' ); // true
                alert( 'Glow' > 'Glee' ); // true

                // If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
                alert( 'Bee' > 'Be' ); // true

            • Case matters:
                ➝ A capital letter "A" is not equal to the lowercase "a".
                ➝ The lowercase "a" is greater according to Unicode order or table (similar to ASCII Table).

        - Comparison of different types:
            • When comparing values of different types, JavaScript converts the values to numbers.
              
              For Example:
                alert( '2' > 1 ); // true, string '2' becomes a number 2
                alert( '01' == 1 ); // true, string '01' becomes a number 1

            • For boolean values, true becomes 1 and false becomes 0.
              
              For Example:
                alert( true == 1 ); // true
                alert( false == 0 ); // true
                alert( '' == false ); // true  --> An empty string becomes a zero.

                
        - Strict Equality Operator (===):
            • It checks the equality without type conversion.
            • If operands are of different types then it returns 'false'.

              For Example:
                alert( 0 === false ); // false, because the types are different


            • Non-strict check:
                alert( null == undefined ); // true

              Strict check:
                alert( null === undefined ); // false

            NOTE: The values null and undefined equal == each other and do not equal any other value.
            
*/          

