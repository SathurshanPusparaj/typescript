const num: number = 5;

//types
//any, void, boolean, string, number, Array, enum
//never = you use the never type to represent the return type of a function that always throws an error or the loop forever or etc

function raiseError(message: string): never {
    throw new Error(message)
}
//raiseError("Throw error");

//Tuple
let skill: [string, number];
skill = ['programming', 3];

let rgb: [number, number, number];
rgb = [255, 0, 0];

//OptionalTuple
let bgcolor : [number, number, number, number?];
bgcolor = [0, 255, 255];

//union type
function merge(a: number | string, b: number | string) {
    if (typeof a==='number' && typeof b === 'number') {
        return a+b;
    }
    if (typeof a==='string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or string');
}

//type
type alphanumeric = string | number;
let input: alphanumeric;
input = 100;
input = 'Hi';
//input = false; //compiler error

enum Month {
    Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun));

//method overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}

add('Dr.', 'Shaun'); // The compiler only suggests the first 2 methods.



