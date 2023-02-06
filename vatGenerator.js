const numericGenerator = (number) => {
  const array = [];
  for (let i = 0; i < number; i + 1) {
    array.push(Math.floor(Math.random() * 10).toString());
    i++;
  }
  return array.toString().replace(/,/g, '');
};

const charGenerator = (number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let counter = 0;
  while (counter < number) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  return result;
};

const alphaNumericGenerator = (number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let counter = 0;
  while (counter < number) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  return result;
};

const vatGenerator = (countryPrefix) => {
  let country = countryPrefix.toUpperCase();
  switch (country) {
    case 'AT':
      return 'ATU' + numericGenerator(8);
    case 'BE':
      return 'BE0' + numericGenerator(9);
    case 'BG':
      return 'BG' + numericGenerator(10 - Math.floor(Math.random() * 2));
    case 'HR':
      return 'HR' + numericGenerator(11);
    case 'CY':
      return 'CY' + numericGenerator(8) + charGenerator(1);
    case 'CZ':
      return 'CZ' + numericGenerator(10 - Math.floor(Math.random() * 3));
    case 'DK':
      return 'DK' + numericGenerator(8);
    case 'EE':
      return 'EE' + numericGenerator(9);
    case 'FI':
      return 'FI' + numericGenerator(8);
    case 'FR':
      return (
        'FR' +
        (Math.floor(Math.random() * 2) === 1
          ? numericGenerator(11)
          : charGenerator(2) + numericGenerator(9))
      );
    case 'DE':
      return 'DE' + numericGenerator(9);
    case 'EL':
      return (
        (Math.floor(Math.random() * 2) === 1 ? 'EL' : 'GR') +
        numericGenerator(9)
      );
    case 'HU':
      return 'HU' + numericGenerator(8);
    case 'IE':
      return (
        'IE' +
        (Math.floor(Math.random() * 2) === 1
          ? numericGenerator(7) +
            charGenerator(2 - Math.floor(Math.random() * 2))
          : numericGenerator(1) +
            charGenerator(1) +
            numericGenerator(5) +
            charGenerator(1))
      );
    case 'IT':
      return 'IT' + numericGenerator(11);
    case 'LV':
      return 'LV' + numericGenerator(11);
    case 'LT':
      return (
        'LT' +
        (Math.floor(Math.random() * 2) === 1
          ? numericGenerator(9)
          : numericGenerator(12))
      );
    case 'LU':
      return 'LU' + numericGenerator(8);
    case 'MT':
      return 'MT' + numericGenerator(8);
    case 'NL':
      return 'NL' + numericGenerator(9) + 'B' + numericGenerator(2);
    case 'PL':
      return 'PL' + numericGenerator(10);
    case 'PT':
      return 'PT' + numericGenerator(9);
    case 'RO':
      return 'RO' + numericGenerator(10 - Math.floor(Math.random() * 9));
    case 'SK':
      return 'SK' + numericGenerator(10);
    case 'SI':
      return 'SI' + numericGenerator(8);
    case 'ES':
      return (
        'ES' +
        alphaNumericGenerator(1) +
        numericGenerator(7) +
        alphaNumericGenerator(1)
      );
    case 'SE':
      return 'SE' + numericGenerator(12);
    case 'AL':
      return (
        (Math.floor(Math.random() * 2) === 1 ? 'J' : 'K') +
        alphaNumericGenerator(8) +
        charGenerator(1)
      );
    case 'MK':
      return 'MK' + numericGenerator(13);
    case 'AU':
      return 'AU' + numericGenerator(11);
    case 'BY':
      return numericGenerator(9);
    case 'CA':
      return alphaNumericGenerator(9);
    case 'IS':
      return alphaNumericGenerator(6 - Math.floor(Math.random() * 2));
    case 'IN':
      return numericGenerator(15);
    case 'ID':
      return numericGenerator(15);
    case 'IL':
      return numericGenerator(9);
    case 'KZ':
      return numericGenerator(12);
    case 'NZ':
      return numericGenerator(9);
    case 'NG':
      return numericGenerator(8) + '-' + numericGenerator(4);
    case 'NO':
      return (
        numericGenerator(9) + (Math.floor(Math.random() * 2) === 1 ? 'MVA' : '')
      );
    case 'PH':
      return numericGenerator(12);
    case 'RU':
      return numericGenerator(12 - Math.floor(Math.random() * 3));
    case 'SM':
      return 'SM' + numericGenerator(5);
    case 'SA':
      return numericGenerator(15);
    case 'RS':
      return numericGenerator(9);
    case 'CH':
      return (
        'CHE-' +
        numericGenerator(3) +
        '.' +
        numericGenerator(3) +
        '.' +
        numericGenerator(3) +
        ' ' +
        (Math.floor(Math.random() * 2) === 1 ? 'MWST' : 'TVA')
      );
    case 'TR':
      return numericGenerator(10);
    case 'UA':
      return numericGenerator(12);
    case 'GB':
      return (
        (Math.floor(Math.random() * 2) === 1 ? 'GB' : 'XI') +
        numericGenerator(9) +
        charGenerator(2) +
        numericGenerator(3)
      );
    case 'UZ':
      return numericGenerator(9);
    case 'AR':
      return numericGenerator(11);
    case 'BO':
      return numericGenerator(7);
    case 'BR':
      return (
        numericGenerator(2) +
        '.' +
        numericGenerator(3) +
        '.' +
        numericGenerator(3) +
        '/' +
        numericGenerator(4) +
        '-' +
        numericGenerator(2)
      );
    case 'CL':
      return (
        numericGenerator(8) +
        '-' +
        (Math.floor(Math.random() * 2) === 1 ? 'K' : numericGenerator(1))
      );
    case 'CO':
      return numericGenerator(10);
    case 'CR':
      return numericGenerator(12 - Math.floor(Math.random() * 4));
    case 'EC':
      return numericGenerator(13);
    case 'SV':
      return (
        numericGenerator(4) +
        '-' +
        numericGenerator(6) +
        '-' +
        numericGenerator(3) +
        '-' +
        numericGenerator(1)
      );
    case 'GT':
      return numericGenerator(7) + '-' + numericGenerator(1);
    case 'HN':
      return 'HN' + numericGenerator(10);
    case 'MX':
      return (
        alphaNumericGenerator(4) +
        numericGenerator(6) +
        alphaNumericGenerator(3)
      );
    case 'NI':
      return (
        numericGenerator(3) +
        '-' +
        numericGenerator(6) +
        '-' +
        numericGenerator(4) +
        charGenerator(1)
      );
    case 'PA':
      return 'PA' + numericGenerator(10);
    case 'PY':
      return (
        numericGenerator(8 - Math.floor(Math.random() * 3)) +
        '-' +
        numericGenerator(1)
      );
    case 'PE':
      return numericGenerator(11);
    case 'DO':
      return (
        'DO' +
        numericGenerator(3) +
        '-' +
        numericGenerator(7) +
        '-' +
        numericGenerator(1)
      );
    case 'UY':
      return numericGenerator(12);
    case 'VE':
      return (
        (Math.floor(Math.random() * 2) === 1 ? 'J-' : 'G-') +
        numericGenerator(8) +
        '-' +
        numericGenerator(1)
      );
    case 'EU':
      return 'EU' + alphaNumericGenerator(9);
    case 'JP':
      return 'JP' + alphaNumericGenerator(12);
    default:
      return 'No country prefix found';
  }
};

module.exports = vatGenerator;
