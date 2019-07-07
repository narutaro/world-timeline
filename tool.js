const json = require('./city.json');

let filtered = json.filter(function(element, index, array) {
    return (element.pop >= 2500000);
});

const util = require('util');
console.log(util.inspect(filtered, { maxArrayLength: null }));

//console.log(filtered)
