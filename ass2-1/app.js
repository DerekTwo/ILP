const argv = require("yargs").argv;
const filename = argv._[0];
const fs = require("fs");

array = JSON.parse(fs.readFileSync("data.txt"));
for (i = 0; i < array.length; i++) {
  if (array[i] == filename) {
    console.log("Provide different filename");
    return;
  }
}
array[array.length] = filename;

fs.writeFileSync(filename, "You are awesome");
fs.writeFileSync("data.txt", JSON.stringify(array));
