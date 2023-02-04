var {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czechRepublic,
  denmark,
  estonia,
  finland,
  france,
  germany,
  greece,
  hungary,
  ireland,
  italy,
  latvia,
  lithuania,
  luxembourg,
  malta,
  netherlands,
  poland,
  portugal,
  romania,
  slovakia,
  slovenia,
  spain,
  sweden,
  albania,
  northMacedonia,
  australia,
  belarus,
  canada,
  iceland,
  india,
  indonesia,
  israel,
  kazakhstan,
  newZeland,
  nigeria,
  norway,
  philippines,
  russia,
  sanMarino,
  saudiArabia,
  serbia,
  switzerland,
  turkey,
  ukraine,
  unitedKindom,
  uzbekistan,
  argentina,
  bolivia,
  brazil,
  chile,
  colombia,
  costaRica,
  ecuador,
  elSalvador,
  guatemala,
  honduras,
  mexico,
  nicaragua,
  panama,
  paraguay,
  peru,
  dominicanRepublic,
  uruguay,
  venezuela,
  europeanCompany,
} = require('./regex.js');

const vatValidator = (country, vatNumber) => {
  let countryToUpperCase = country.toUpperCase();
  let vat = vatNumber.toUpperCase();
  switch (countryToUpperCase) {
    case 'AT':
      return austria.test(vat);
    case 'BE':
      return belgium.test(vat);
    case 'BG':
      return bulgaria.test(vat);
    case 'HR':
      return croatia.test(vat);
    case 'CY':
      return cyprus.test(vat);
    case 'CZ':
      return czechRepublic.test(vat);
    case 'DK':
      return denmark.test(vat);
    case 'EE':
      return estonia.test(vat);
    case 'FI':
      return finland.test(vat);
    case 'FR':
      return france.test(vat);
    case 'DE':
      return germany.test(vat);
    case 'EL':
      return greece.test(vat);
    case 'HU':
      return hungary.test(vat);
    case 'IE':
      return ireland.test(vat);
    case 'IT':
      return italy.test(vat);
    case 'LV':
      return latvia.test(vat);
    case 'LT':
      return lithuania.test(vat);
    case 'LU':
      return luxembourg.test(vat);
    case 'MT':
      return malta.test(vat);
    case 'NL':
      return netherlands.test(vat);
    case 'PL':
      return poland.test(vat);
    case 'PT':
      return portugal.test(vat);
    case 'RO':
      return romania.test(vat);
    case 'SK':
      return slovakia.test(vat);
    case 'SI':
      return slovenia.test(vat);
    case 'ES':
      return spain.test(vat);
    case 'SE':
      return sweden.test(vat);
    case 'AL':
      return albania.test(vat);
    case 'MK':
      return northMacedonia.test(vat);
    case 'AU':
      return australia.test(vat);
    case 'BY':
      return belarus.test(vat);
    case 'CA':
      return canada.test(vat);
    case 'IS':
      return iceland.test(vat);
    case 'IN':
      return india.test(vat);
    case 'ID':
      return indonesia.test(vat);
    case 'IL':
      return israel.test(vat);
    case 'KZ':
      return kazakhstan.test(vat);
    case 'NZ':
      return newZeland.test(vat);
    case 'NG':
      return nigeria.test(vat);
    case 'NO':
      return norway.test(vat);
    case 'PH':
      return philippines.test(vat);
    case 'RU':
      return russia.test(vat);
    case 'SM':
      return sanMarino.test(vat);
    case 'SA':
      return saudiArabia.test(vat);
    case 'RS':
      return serbia.test(vat);
    case 'CH':
      return switzerland.test(vat);
    case 'TR':
      return turkey.test(vat);
    case 'UA':
      return ukraine.test(vat);
    case 'GB':
      return unitedKindom.test(vat);
    case 'UZ':
      return uzbekistan.test(vat);
    case 'AR':
      return argentina.test(vat);
    case 'BO':
      return bolivia.test(vat);
    case 'BR':
      return brazil.test(vat);
    case 'CL':
      return chile.test(vat);
    case 'CO':
      return colombia.test(vat);
    case 'CR':
      return costaRica.test(vat);
    case 'EC':
      return ecuador.test(vat);
    case 'SV':
      return elSalvador.test(vat);
    case 'GT':
      return guatemala.test(vat);
    case 'HN':
      return honduras.test(vat);
    case 'MX':
      return mexico.test(vat);
    case 'NI':
      return nicaragua.test(vat);
    case 'PA':
      return panama.test(vat);
    case 'PY':
      return paraguay.test(vat);
    case 'PE':
      return peru.test(vat);
    case 'DO':
      return dominicanRepublic.test(vat);
    case 'UY':
      return uruguay.test(vat);
    case 'VE':
      return venezuela.test(vat);
    case 'EU':
      return europeanCompany.test(vat);
    default:
      return null;
  }
};

module.exports = vatValidator;
