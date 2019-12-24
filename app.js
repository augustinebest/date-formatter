const { formatDate, formatTime } = require('./index');

const timeStamp2 = new Date();
const format = 'others';

console.log(formatDate(timeStamp2, format))