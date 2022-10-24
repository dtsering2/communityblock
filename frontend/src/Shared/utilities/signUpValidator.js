export const validateSignUpForm = ({email, username, password, confirmPassword}) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword)
    const isUsernameValid = validateUsername(username);

    return isEmailValid && isPasswordValid && isConfirmPasswordValid && isUsernameValid;
}

const validatePassword = (password) => {
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasNonalphas = /\W/.test(password);
    if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas && password.length>=8){
        return true
    }
}

const validateEmail = (email) => {
    const EMAILPATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return EMAILPATTERN.test(email);
}

const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword
}

const validateUsername = (username) => {
    return username.length > 5 && username.length < 21;
}
