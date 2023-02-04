const vatValidator = require('./validator.js');
const prefixGenerator = require('./prefixGenerator.js');

class WorldVatValidator {
  isValid(countryPrefix, vatNumber) {
    return vatValidator(countryPrefix, vatNumber);
  }
  foundPrefix(country) {
    return prefixGenerator(country);
  }
}

const VatValidator = new WorldVatValidator();

module.exports = VatValidator;
