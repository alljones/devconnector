const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Job Title Validation Check
  if (!Validator.isEmpty(data.title)) {
    errors.title = "Job Title field is required";
  }

  // Company Validation Check
  if (!Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  // From Validation Check
  if (!Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
