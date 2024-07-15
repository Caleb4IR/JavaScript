const fs = require("node:fs");

const fileReading = (err, data) => {
    if(err) {
        console.error("error reading file: ", err);
        return;
    }
    console.log("File content: ", data);
}

fs.readFile("./test.txt", "utf8", fileReading)