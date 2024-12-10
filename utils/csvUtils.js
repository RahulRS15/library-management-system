// csvUtils.js - CSV utility functions
const { Parser } = require('json2csv');

exports.convertToCSV = (data) => {
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
};
