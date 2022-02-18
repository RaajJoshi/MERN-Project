
const Validationdelete = (valuesDelete) => {
    let errors={};
    if(!valuesDelete.labno){
        errors.labno = "This field is required.";
    }
    if(!valuesDelete.classno){
        errors.classno = "Please, choose option.";
    }
  return errors;
};

export default Validationdelete;