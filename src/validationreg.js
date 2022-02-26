
const Validationreg = (valuesReg) => {
    let errors={};
    if(!valuesReg.fname){
        errors.fname = "First Name is required.";
    }
    if(!valuesReg.lname){
        errors.lname = "Last Name is required.";
    }
    if(!valuesReg.userID){
        errors.userID = "UserID is required.";
    }
    if(!valuesReg.email){
        errors.email = "Email is required.";
    }else if(!/[a-z0-9]+@ddu\.ac\.in/.test(valuesReg.email)){
        errors.email = "plz, Enter valid email.";
    }
    if(!valuesReg.phone){
        errors.phone = "Phone no. is required.";
    }
    if(!valuesReg.password){
        errors.password = "Password is required.";
    }
    if(!valuesReg.cnfpasswd){
        errors.cnfpasswd = "Confirm Password is required.";
    }
  return errors;
};

export default Validationreg;
