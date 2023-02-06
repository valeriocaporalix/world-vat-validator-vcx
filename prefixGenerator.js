const prefixGenerator = (country) => {
  let countryToLowerCase = country.toLowerCase();
  switch (countryToLowerCase) {
    case 'austria':
      return 'AT';
    case 'belgium':
      return 'BE';
    case 'bulgaria':
      return 'BG';
    case 'croatia':
      return 'HR';
    case 'cyprus':
      return 'CY';
    case 'czech republic':
      return 'CZ';
    case 'denmark':
      return 'DK';
    case 'estonia':
      return 'EE';
    case 'finland':
      return 'FI';
    case 'france':
      return 'FR';
    case 'germany':
      return 'DE';
    case 'greece':
      return 'EL';
    case 'hungary':
      return 'HU';
    case 'ireland':
      return 'IE';
    case 'italy':
      return 'IT';
    case 'latvia':
      return 'LV';
    case 'lithuania':
      return 'LT';
    case 'luxembourg':
      return 'LU';
    case 'malta':
      return 'MT';
    case 'netherlands':
      return 'NL';
    case 'poland':
      return 'PL';
    case 'portugal':
      return 'PT';
    case 'romania':
      return 'RO';
    case 'slovakia':
      return 'SK';
    case 'slovenia':
      return 'SI';
    case 'spain':
      return 'ES';
    case 'sweden':
      return 'SE';
    case 'albania':
      return 'AL';
    case 'north macedonia':
      return 'MK';
    case 'australia':
      return 'AU';
    case 'belarus':
      return 'BY';
    case 'canada':
      return 'CA';
    case 'iceland':
      return 'IS';
    case 'india':
      return 'IN';
    case 'indonesia':
      return 'ID';
    case 'israel':
      return 'IL';
    case 'kazakhstan':
      return 'KZ';
    case 'new zeland':
      return 'NZ';
    case 'nigeria':
      return 'NG';
    case 'norway':
      return 'NO';
    case 'philippines':
      return 'PH';
    case 'russia':
      return 'RU';
    case 'san marino':
      return 'SM';
    case 'saudi arabia':
      return 'SA';
    case 'serbia':
      return 'RS';
    case 'switzerland':
      return 'CH';
    case 'turkey':
      return 'TR';
    case 'ukraine':
      return 'UA';
    case 'united kindom':
      return 'GB';
    case 'uzbekistan':
      return 'UZ';
    case 'argentina':
      return 'AR';
    case 'bolivia':
      return 'BO';
    case 'brazil':
      return 'BR';
    case 'chile':
      return 'CL';
    case 'colombia':
      return 'CO';
    case 'costa rica':
      return 'CR';
    case 'ecuador':
      return 'EC';
    case 'el salvador':
      return 'SV';
    case 'guatemala':
      return 'GT';
    case 'honduras':
      return 'HN';
    case 'mexico':
      return 'MX';
    case 'nicaragua':
      return 'NI';
    case 'panama':
      return 'PA';
    case 'paraguay':
      return 'PY';
    case 'peru':
      return 'PE';
    case 'dominican republic':
      return 'DO';
    case 'uruguay':
      return 'UY';
    case 'venezuela':
      return 'VE';
    case 'europe':
      return 'EU';
    case 'japan':
      return 'JP';
    default:
      return 'No country found';
  }
};

module.exports = prefixGenerator;
