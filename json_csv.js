const fs = require("fs");

const jsonFile = "./result.json";
const csvFile = "./jsonToCsv.csv";

// Read the JSON file
fs.readFile(jsonFile, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    // Parse the JSON content
    const jsonData = JSON.parse(data);

    // Now you can work with the retrieved data
    const headers = Object.keys(jsonData[0]);
    const convertedHeaders = headers.join(',');
    const csvRows = [];
    jsonData.forEach(singleObj => {
      const row = headers.map((header) => singleObj[header]);
      csvRows.push(row.join(','));
    });

    const content = [convertedHeaders, ...csvRows].join('\n');
    fs.writeFileSync(csvFile, content, "utf-8");

  } catch (jsonError) {
    console.error("Error parsing JSON:", jsonError);
  }
});
