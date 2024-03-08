const isNum = (num) => typeof num !== 'object' && (!Number.isNaN(+(String((String(num) || '').replace(/[^0-9\.\-e]/, '') !== String(num) || num === '' ? NaN : num))));

module.exports = { isNum };
