const { isNum } = require('./index');

// Positive tests

test('Whole integer to be true', () => {
  expect(isNum(2)).toBe(true);
});

test('Whole integer as string to be true', () => {
  expect(isNum('2')).toBe(true);
});

test('Decimal to be true', () => {
  expect(isNum(1.2345)).toBe(true);
});

test('Decimal as string to be true', () => {
  expect(isNum('1.2345')).toBe(true);
});

test('Padded whole integer to be true', () => {
  expect(isNum('02')).toBe(true);
});

test('Negative whole number to be true', () => {
  expect(isNum(-10)).toBe(true);
});

test('Negative decimal string number to be true', () => {
  expect(isNum('-10.23')).toBe(true);
});

test('Minus zero to be true', () => {
  expect(isNum(-0)).toBe(true);
});

test('Exponent to be true', () => {
  expect(isNum(4.917736942280289e-10)).toBe(true);
});

test('Exponent string to be true', () => {
  expect(isNum(4.917736942280289e-10)).toBe(true);
});

test('Big integers to be true', () => {
  const big1 = isNum(BigInt(9007199254740991));
  const big2 = isNum(BigInt("0x1fffffffffffff"));
  const big3 = isNum(BigInt("0b11111111111111111111111111111111111111111111111111111"));
  const big4 = isNum(0b11111111111111111111111111111111111111111111111111111);

  expect(big1).toBe(true);
  expect(big2).toBe(true);
  expect(big3).toBe(true);
  expect(big4).toBe(true);
});

// Negative tests

test('String to be false', () => {
  expect(isNum('no')).toBe(false);
});

test('undefined to be false', () => {
  expect(isNum(undefined)).toBe(false);
});

test('null to be false', () => {
  expect(isNum(null)).toBe(false);
});

test('NaN to be false', () => {
  expect(isNum(NaN)).toBe(false);
});

test('empty string to be false', () => {
  expect(isNum('')).toBe(false);
});

test('Whitespace string to be false', () => {
  expect(isNum('\t')).toBe(false);
});

test('Mixed whitespace string to be false', () => {
  expect(isNum('\r\n no \t')).toBe(false);
});

test('Array to be false', () => {
  expect(isNum([])).toBe(false);
});

test('Object to be false', () => {
  expect(isNum({obj: 123})).toBe(false);
});
