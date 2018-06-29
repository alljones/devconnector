const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Job Title Validation Check
  if (!Validator.isEmail(data.title)) {
    errors.title = "Job Title field is invalid";
  }

    // Company Validation Check
    if (!Validator.isEmail(data.company)) {
      errors.company = "Company field is invalid";
    }

    // From Validation Check
    if (!Validator.isEmail(data.from)) {
      errors.from = From date field is invalid";
    }


  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
