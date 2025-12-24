const filesystem = require("fs")

const filename = "test.txt";


const writefile = filesystem.writeFileSync(
    filename,
    "This is initial data",
    "utf-8"
);
console.log(writefile);
