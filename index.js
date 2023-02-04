const vatValidator = require('./validator.js');

class WorldVatValidator {
  isValid(countryPrefix, vatNumber) {
    return vatValidator(countryPrefix, vatNumber);
  }
}

const VatValidator = new WorldVatValidator();

module.exports = VatValidator;
