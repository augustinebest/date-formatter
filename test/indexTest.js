const expect = require('chai').expect;
const { formatDate, formatTime } = require('../index');

let timeStamp = new Date();
let format_time = '12h';
let format_date = 'others'

describe('Index', function() {
    // Testing for Time
    describe('formatTime()', function() {
        it('format to return 00:00 xx || 00:00', function() {
            let result = formatTime(timeStamp, format_time);
            let regex = /\d+:\d+ ?(am|pm)?/;
            expect(result).to.match(regex);
        })
    })
    
     // Testing for date
     describe('formatDate()', function() {
        it('format to return dd/mm/yyyy || mm/dd/yyyy || yyyy/mm/dd || Tuesday 24th of December, 2019', function() {
            let result = formatDate(timeStamp, format_date);
            let regex = /(\d+\/\d+\/\d+)|(\w+ \d+\w+ \w+ \w+, \d+)/;
            expect(result).to.match(regex);
        })
    })
})
