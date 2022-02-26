
const Validationclass = (valuesLab) => {
    let errors={};
    if(!valuesLab.resno){
        errors.resno = "This field is required.";
    }
    if(!valuesLab.eqtype){
        errors.eqtype = "This field is required.";
    }
    if(!valuesLab.abeq){
        errors.abeq = "This field is required.";
    }
  return errors;
};

export default Validationclass;