const fs = require('fs');

const csvFile = './test.csv';
const jsonFile = './result.json';

// const csvData = fs.readFileSync(csvFile, 'UTF-8');
const csvData = fs.readFileSync(csvFile, "utf-8").replace(/^\uFEFF/, "");

// console.log(csvData);

// array of lines 
const lines = csvData.split(/\r?\n/);

const headers = lines[0].split(',')
// console.log(headers);

const jsonResult = [];
// using nested for loops
for(let i = 1; i < lines.length - 1; i++) {
      const currLine = lines[i].split(',');
      const obj = {};
      for(let j =0; j < headers.length; j++) {
            obj[headers[j]] = currLine[j];     
      }
      jsonResult.push(obj);

}

const jsonArr = JSON.stringify(jsonResult,null, 2)
fs.writeFileSync(jsonFile, jsonArr, 'utf-8');
console.log(jsonArr);
