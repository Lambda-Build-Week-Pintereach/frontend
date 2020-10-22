import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(2, 'Username must be at least 2 characters'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Must be a valid email address'),
});