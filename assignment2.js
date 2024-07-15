const fs = require('node:fs');
const { EventEmitter } = require('node:events');

const emitter = new EventEmitter();

const WRITE_FIB_EVENT = 'writeFibonacci';
const READ_FIB_EVENT = 'readFibonacci';

const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib.join(', ');
}

emitter.on(WRITE_FIB_EVENT, () => {
    try {
        const fibonacciSeries = generateFibonacci(15);
        fs.writeFileSync('./fibonacci.txt', fibonacciSeries, 'utf8');
        console.log('Fibonacci series written to file');
        
        emitter.emit(READ_FIB_EVENT);
    } catch (err) {
        console.error('Error writing file:', err);
    }
});
emitter.emit(WRITE_FIB_EVENT);

emitter.on(READ_FIB_EVENT, () => {
    try {
        const fileContent = fs.readFileSync('./fibonacci.txt', 'utf8');
        console.log('File content:', fileContent);
    } catch (err) {
        console.error('Error reading file:', err);
    }
});
emitter.emit(READ_FIB_EVENT);


