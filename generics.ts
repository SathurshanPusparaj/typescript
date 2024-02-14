function getFirstElement<T>(array: T[]) {
    return array[0];
}

const numbers = [1 ,2 ,3];
const firstNum = getFirstElement(numbers);

const strings = ['a', 'b'];
const firstString = getFirstElement(strings);

type ApiResponse<Data = {status : number}> = {
    data: Data,
    isError: boolean
}

type UserResponse = ApiResponse<{name: string, age: number}>

const defaultResponse : ApiResponse = {
    data: {
        status : 200
    },
    isError: false
}

const response: UserResponse = {
    data: {
        name: 'kyle',
        age: 28
    },
    isError: false
}
