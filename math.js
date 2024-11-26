module.exports.sum = (a, b) => Number(a) + Number(b);

// 2 + 2 = 4
// '2' + '2' = 4
// 2 + '2' = 4
// '2' + 2 = 4
// 'qwert' + 5 = NaN
// {} + 5 = NaN
// Number.MAX_VALUE + Number.MAX_VALUE = Infinity
