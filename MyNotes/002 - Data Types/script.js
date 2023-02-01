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


        2) String:
        3) Boolean:
        4) Undefined:
        5) Null:
        6) Symbol:
        7) BigInt:

        •Dynamic typing
        Value has the type not the variable.
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
console.log(typeof null);

