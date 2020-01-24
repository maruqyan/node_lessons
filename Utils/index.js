module.exports = {
   isEmail : (email) => {
    let isBooll = false; 
    let regexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexp.test(email) && email !== ''){
      return isBooll = true
    };
  
    return isBooll
  },

  isName: (name) => {
    if(name !== '' && name.length >= 4){
      return true
    }
    return false
  },

  isUsername:(username) => {
    if(username !== '' && username.length >= 4){
      return true
    }
    return false
  },

  isPassowrd: (password,confirmPassword) => {
    if(password !== '' && confirmPassword !== '' && password === confirmPassword){
      return true
    }
    return false
  }
}
