function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

var person = new Person('123-45-6789', 'John', 'Doe');
console.log(person.getFullName())


class Book {
    isbn; 
    name;

    constructor(isbn, name) {
        this.isbn = isbn;
        this.name = name;
    }

    getName() {
        return `Name of the book is ${this.name}`;
    }
}

const book = new Book('171-28-0926', 'The biography of obama');
console.log(book.getName());