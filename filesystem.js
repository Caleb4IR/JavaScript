const fs = require("node:fs");

// const fileReading = (err, data) => {
//     if(err) {
//         console.error("error reading file: ", err);
//         return;
//     }
//     console.log("File content: ", data);
// }

// fs.readFile("./test.txt", "utf8", fileReading)

const content = "Hello World!";

const writeFileCallback = (err) => {
    if(err) {
        console.error("Error wriring file: ", err);
        return;
    }
    console.log("File has been saved");
}

fs.writeFile("./test.txt", content, writeFileCallback);