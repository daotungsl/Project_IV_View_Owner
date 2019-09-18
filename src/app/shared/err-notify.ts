export const ERROR_REGISTER ={
    phone: {
        required : 'Phone number must not empty',
        syntax: 'Phone number must like : +84123456789, 0123456789,.....'
    },
    email: {
        required : 'Email must not empty',
        syntax: 'Email must like : abc@example.com'
    },
    password: {
        required : 'Password must not empty',
        syntax: 'Password must be at least 8 characters and must contain: 1 uppercase letter, 1 lowercase letter and 1 number'
    }
}