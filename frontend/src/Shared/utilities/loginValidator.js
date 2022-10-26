export const validateLoginForm = ({email, password}) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;

}

const validatePassword = (password) => {
    return password.length > 5 && password.length < 21;
}

export const validateEmail = (email) => {
    const EMAILPATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return EMAILPATTERN.test(email);
}

