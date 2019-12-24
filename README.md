<div align="center">
<img src="public/Reformat-logo.jpeg" alt="reformat-date" width="300"/>

### This package can be used from small scale to large scale project

</div>
#### - How to use

**step 1:** Install reformat-date
```bash
npm install reformat-date --save
```
**step 2:** Require the package in your project using object destructuring
```bash
const { formatDate, formatTime } = require('reformat-date');
```
**step 3:** Pass in the current date as an argument and the format you want it to return (i.e 12hr/24hr) when you call the function

#### - For time format
```bash
let currentDate = new Date();
let format = 'dd/mm/yyyy'; // or mm/dd/yyyy or yyyy/mm/dd returns in the specified format passed 
formatDate(currentDate, format);
```
```bash
let currentDate = new Date();
let format = 'others'; // returns in this format; e.g Tuesday 24th of December, 2019 
formatDate(currentDate, format);
```

#### - For date format
```bash
let currentDate = new Date();
let format = '12h'; // returns 12h format along with either am or pm
formatDate(currentDate, format);
```
```bash
let currentDate = new Date();
let format = '24h'; // returns 24h format 
formatDate(currentDate, format);
```

### for contributions

See [here](https://github.com/augustinebest/date-formatter/blob/master/CONTRIBUTING.md)
