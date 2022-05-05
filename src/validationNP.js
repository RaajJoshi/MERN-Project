const ValidationNP = (values) => {
    let errors={};
    if(!values.pass){
        errors.pass = "This field is required.";
    }
    if(!values.cpass){
        errors.cpass = "This field is required.";
    }
    if(values.pass !== values.cpass){
        errors.cpass = "Both password must be same."
    }
  return errors;
};

export default ValidationNP;