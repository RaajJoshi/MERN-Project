
const Validation = (values) => {
    let errors={};
    if(!values.userID){
        errors.userID = "UserID is required.";
    }
    if(!values.password){
        errors.password = "Password is required.";
    }
  return errors;
};

export default Validation;
