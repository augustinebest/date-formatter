const assert = require('chai').assert;
const { formatDate, formatTime } = require('../index');

describe('Index', function() {
    describe('formatTime()', function() {
        it('format to return 00:00 xx || 00:00', function() {
            let result = formatTime();
            assert.equal(result, 'hello')
        })
    })
})
