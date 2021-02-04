import isWebAddress from '../src';

const invalidList = [
  '',
  'example.com.',
  'example..com',
  'example...com.',
  '192.168.1..0',
  'https://example.com.',
  'https://example..com',
  'https://example...com.',
];

const validList = [
  'example.com',
  '192.168.1.1',
  'http://192.168.1.1',
  'http://example.com',
  'http://example.com/',
  'http://example.com:8080',
  'http://example.com/hello-world',
  'example.com/search?q=hello+world',
  'http://example.com/very-long/path/and?it=should&be=works&too=true',
  'http://192.168.1.1/very-long/path/and?it=should&be=works&too=true',
];

describe('invalid', () => {
  invalidList.forEach(url => {
    test(url, () => {
      expect(isWebAddress(url)).toBeFalsy();
    });
  });
});

describe('valid', () => {
  validList.forEach(url => {
    test(url, () => {
      expect(isWebAddress(url)).toBeTruthy();
    });
  });
});
