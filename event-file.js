const fs = require("node:fs");
const {EventEmitter} = require("node:events");

const emitter = new EventEmitter();
const FILE_READ_EVENT = "readfile"
emitter.on(FILE_READ_EVENT, () => {
    const fileReading = (err, data) => {
        if(err) {
            console.error("error reading file: ", err);
            return;
        }
        console.log("File content: ", data);
    }
    fs.readFile("./test.txt", "utf8", fileReading);
});
emitter.emit(FILE_READ_EVENT);