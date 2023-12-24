class Person {
    static className: string = 'Person';
    readonly ssn: string; 
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }

    get _firstName() {
       return this.firstName;
    }

    set _setFirstName(firstName: string) {
        if (firstName.length <= 3) {
            throw new Error('Invalid first name');
        }
        this.firstName = firstName;
    }
}

const person = new Person('123-45-6789', 'John', 'Doe');
console.log(person.getName());
person._setFirstName = 'abcbd';
console.log(person);
console.log(Person.className);

//console.log(person.firstName);
//person.ssn = 'abc'; not work because it marked as readOnly

/*Readonly vs. const
The following shows the differences between readonly and const:

                |        readonly	                                         |     const
Use for	        |    Class properties	                                     |   Variables
Initialization	| In the declaration or in the constructor of the same class |	In the declaration */

//Abstract class
abstract class Employee {
    constructor(private firstName:string, private lastName:string) {

    }

    abstract getSalary():number;
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

interface IPerson {
    firstName:string;
    lastName: string;
}
/*
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));
*/

class Man implements IPerson {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}