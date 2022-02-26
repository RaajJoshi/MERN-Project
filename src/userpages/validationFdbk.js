
const ValidationFdbk = (values) => {
    let errors={};
    if(!values.feedback){
        errors.feedback = "This field is required.";
    }
  return errors;
};

export default ValidationFdbk;
