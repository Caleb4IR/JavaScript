linkForEvents = "https://nodejs.org/docs/v20.15.1/api/events.html#emitterremovealllistenerseventname"

// const { EventEmitter } = require("stream");

// const emitter = new EventEmitter
// emitter.on("foo", () => {
//     console.log("Event foo triggered");
// })
// emitter.emit("foo");

// const { EventEmitter } = require("stream");
// const EVENT_NAME = "foo"
// const emitter = new EventEmitter
// emitter.on(EVENT_NAME, () => {
//     console.log("Event foo triggered");
// })
// emitter.emit(EVENT_NAME);

const {EventEmitter} = require('node:events');
 
const emitter = new EventEmitter();
 
const EVENT_NAME = 'join';
 
// Listen to a event
emitter.on(EVENT_NAME, () => {
    console.log('User have joined a conversation');
})
  
// Trigger a event
emitter.emit(EVENT_NAME);

const employee = {
    name: "John",
    age: 24,
    address: "Sample Address",
    hobbies: ["Reading", "Cooking", "Gaming"]
};