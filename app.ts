interface IForm {
    name: string
    password: string,
    age: number
}

type FormToValidation<T> = {
    [key in keyof T]: { isValid: true } | { isValid: false, errorMessage: string }
}

const form: IForm = {
    name: 'John',
    password: '123',
    age: 23
}

const formValidation: FormToValidation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Password must have at least 5 characters!'},
    age: {isValid: false}
}
