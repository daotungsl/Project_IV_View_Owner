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
    },
    confirmPassword: {
        required : 'Confirm Password must not empty',
        syntax: 'Passwords must match'
    },

}
export const ERROR_ADDRESS ={
    address: {
        required : 'Address must not empty',
        maxLength: 'Only 100 character'
    },
    description: {
        required : 'Description must not empty',
        maxLength: 'Only 100 character'
    },
    cityId: {
        required : 'City must not empty',
        syntax: ''
    },
    storeId: {
        required : 'Store Password must not empty',
        syntax: ''
    },

}