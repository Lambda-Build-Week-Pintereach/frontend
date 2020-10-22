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
    // confirmPassword: yup
    //     .string()
    //     .required("Password confirmation is required.")
    //     .when("password", {
    //     is: password => (password && password.length > 0 ? true : false),
    //     then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")}),
    email: yup
        .string()
        .required('Email is required')
        .email('Must be a valid email address'),
});