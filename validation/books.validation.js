const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateBook(data) {
  let errors = {};
  data.namebook = !isEmpty(data.namebook) ? data.namebook : "";
  data.reference = !isEmpty(data.reference) ? data.reference : "";
  data.path = !isEmpty(data.path) ? data.path : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.description = !isEmpty(data.description) ? data.description : "";
 

  if (validator.isEmpty(data.namebook)) {
    errors.namebook = "Required namebook";
  }
  if (validator.isEmpty(data.reference)) {
    errors.reference = "Required reference";
  }
  if (validator.isEmpty(data.path)) {
    errors.path = "Required path";
  }
  if (validator.isEmpty(data.image)) {
    errors.image = "Required image";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "Required description";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};