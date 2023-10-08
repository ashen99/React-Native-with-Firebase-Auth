export const validateCredentials = (email, password) => {
    if (!email && !password) {
      return 'Email and Password cannot be empty';
    } else if (!email) {
      return 'Email cannot be empty';
    } else if (!password) {
      return 'Password cannot be empty';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return 'Invalid Email';
    }
  
    return true;
  };