
const ValidationinfoClass = (valuesClass) => {
    let errors={};
    if(!valuesClass.classno){
        errors.classno = "This field is required.";
    }
    if(!valuesClass.benchno){
        errors.benchno = "This field is required.";
    }
    if(!valuesClass.fannno){
        errors.fannno = "This field is required.";
    }
    if(!valuesClass.tubelightno){
        errors.tubelightno = "This field is required.";
    }
    if(!valuesClass.projec){
        errors.projec = "Please, choose option.";
    }
    if(!valuesClass.Inchargeclass){
        errors.Inchargeclass = "This field is required.";
    }
  return errors;
};

export default ValidationinfoClass;
