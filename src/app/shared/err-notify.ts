export const ERROR_REGISTER ={
    fullName: {
        required : 'Full name must not empty',
        minLength: 'Minimum 6 character'
    },
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
    repassword: {
        required : 'Confirm Password must not empty',
        syntax: 'Passwords must match'
    },
    gender: {
        required : 'Gender must not empty',
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
        required : 'City must be chosen',
        syntax: ''
    },
    storeId: {
        required : 'Store must be chosen',
        syntax: ''
    },

}
export const ERROR_SHOP_INFO ={
    name: {
        required : 'Account name must not empty',
        maxLength: 'Only 100 character'
    },
    email: {
        required : 'Email must not empty',
        syntax: 'Email must like : abc@example.com'
    },
    phone: {
        required : 'Phone number must not empty',
        syntax: 'Phone number must like : +84123456789, 0123456789,.....'
    },
    image: {
        required : 'Image must not empty',
        syntax: ''
    },
    typeStoreId: {
        required : 'TypeStore must not empty',
        syntax: ''
    },

}
