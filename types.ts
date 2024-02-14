type User = {
    id: string;
    name: string;
}

const user : User = {id : '1', name: 'Mathews'};

type CompanyEmployee = User & {
    email: string;
}

const employee : CompanyEmployee = {id: '1', name: 'lenore', email: 'lenore@gmail.com'}

const people: (User | CompanyEmployee)[] = [
    {id: '1', name: 'Kyle'},
    {id: '2', name: 'Sally'},
    {id: '3', name: 'John', email: 'john@outlook.com'},
    {id: '4', name: 'Mike', email: 'mike@gmail.com'},
]

people.forEach(person => {
    if (isEmployee(person)) {
        console.log('Employee email is ' + person.email);
    } else {
        console.log('I\'m just a user : ' + person.name);
    }
})

function isEmployee(person: User | CompanyEmployee) : person is CompanyEmployee {
    return "email" in person;
}

type LoadingLocationState = {
    state: "Loading"
}

type SuccessLocationState = {
    state: "Success",
    coords: {lat: number, lon: number}
}

type ErrorLocationState = {
    state: "Error",
    error: {message: string}
}

type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;

function printLocation(location: LocationState) {
    switch (location.state) {
        case "Loading":
            console.log(location.state);
            break;
        case "Success":
            console.log(location.coords.lat, location.coords.lon);
            break;
        case "Error": 
            console.log(location.error.message);
            break;    
    }
}