const vatValidator = require('./validator.js');
const prefixGenerator = require('./prefixGenerator.js');
const vatGenerator = require('./vatGenerator.js');

class WorldVatValidator {
  isValid(countryPrefix, vatNumber) {
    return vatValidator(countryPrefix, vatNumber);
  }
  findPrefix(country) {
    return prefixGenerator(country);
  }
  generate(countryPrefix) {
    return vatGenerator(countryPrefix);
  }
}

const VatValidator = new WorldVatValidator();

module.exports = VatValidator;
