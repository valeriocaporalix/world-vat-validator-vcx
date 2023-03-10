# world-vat-validator-vcx

## Features

- Automatic validation of any VAT format. Response will be a boolean or null if country prefix doesn't exist.

```js
VatValidator.isValid('Country Prefix', 'Full Vat Number');
```

- Found the right country prefix anytime you need it.

```js
VatValidator.findPrefix('Country Name');
```

- (NEW) Now new method available, country prefix input is required, it will return a random VAT validated number.

```js
VatValidator.generate('Country Prefix');
```

## Installing

Using npm:

```bash
$ npm i world-vat-validator-vcx
```

Once the package is installed, you can import the library using `import` approach:

```js
import VatValidator from 'world-vat-validator-vcx';
```

## Example

```js
import VatValidator from 'world-vat-validator-vcx';

const falseTest = VatValidator.isValid('IT', 'test');
// Output : false

const trueTest = VatValidator.isValid('DO', '1-30-00245-8');
// Output : true

const invalidPrefix = VatValidator.isValid('TEST', '437289334');
// Output : null
```

## Resources

- [Repository](https://github.com/valeriocaporalix/world-vat-validator-vcx)

## License

Copyright 2023 valeriocaporalix

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
