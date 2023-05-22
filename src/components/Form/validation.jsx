
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;
const regexpass = /\d/;

export default function validate(userData) {
    const errors = {}    
  
    if (!regexEmail.test(userData.email)) {
        errors.email = 'It must be an email';
    }

    if (!userData.email){
        errors.email = "User can't by empty";
    }

    if(userData.email.length > 35){
        errors.email = 'Must contain at lest 35 characters'
    }

    if (!regexpass.test(userData.password)) {
        errors.password = 'Must contain at least 1 number.'        
    }

    if (userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'Must be 6-10 characters'
    }

    return errors
    }


