// Java Prototyping
function Box(value) {
    this.value = value;
}

Box.prototype.getValue = function () {
    return this.value;
};

const box = new Box(1);
// Mutate Box.prototype after an instance has aleady been created
Box.prototype.getValue = function () {
    return this.value + 1;
};

console.log(box.getValue());