
const Validationinfo = (valuesLab) => {
    let errors={};
    if(!valuesLab.labno){
        errors.labno = "This field is required.";
    }
    if(!valuesLab.pcno){
        errors.pcno = "This field is required.";
    }
    if(!valuesLab.chrno){
        errors.chrno = "This field is required.";
    }
    if(!valuesLab.acno){
        errors.acno = "This field is required.";
    }
    if(!valuesLab.fanno){
        errors.fanno = "This field is required.";
    }
    if(!valuesLab.lightno){
        errors.lightno = "This field is required.";
    }
    if(!valuesLab.ethr){
        errors.ethr = "Please, choose option.";
    }
    if(!valuesLab.projc){
        errors.projc = "Please, choose option.";
    }
    if(!valuesLab.Incharge){
        errors.Incharge = "This field is required.";
    }
  return errors;
};

export default Validationinfo;