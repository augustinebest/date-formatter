const { formatDate, formatTime } = require('./index');

const timeStamp2 = new Date();
const format = '12h';

console.log(formatTime(timeStamp2, format))