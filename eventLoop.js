// My Attempt & Logic

//setTimeout with timer will allow it to run last
setTimeout(() => console.log('Print Fifth'), 300);
//setImmediate()s run in order
setImmediate(() => console.log('Print Third'));
//process.nextTick() runs before any set___)
process.nextTick(() => console.log('Print Second'));
//console.log runs before anything else - it's a synchronous statement that runs before any asynchronous code
console.log('Print First');
//setImmediate()s run in order
setImmediate(() => console.log('Print Forth'));

// Instructor Solution & Logic

const fs = require('fs')

//process.on('beforeExit') ensure it's the last thing that's run before the process ends its execution
process.on('beforeExit', () => {
    console.log('Print Fifth')
})

//using setTimeout and setting it to zero makes it so it's the first timer to that takes place in this document
setTimeout(() => console.log('Print Third'))

//same logic as above
process.nextTick(() => console.log('Print Second'))

// same logic as above
console.log('Print First')

//used readFile to engage the input/output phase and then go into the check phase with setImmediate in order to print fourth
fs.readFile(__filename, () => {
    setImmediate(() => console.log('Print Forth'))
})
/* OPTIONS FOR LOGGING
synchronous - using nothing.
setTimeout - assigning to 0 or a second iteration.
setInterval - could have used a loop of 1 to run one time at 0 or in another iteration.
process.nextTick - to run after the synchronous code or after the polling phase if used with the file system module.
fs - with synchronous code inside to run after the polling phase.
setImmediate - within fs call to run during the check phase.
process.on - to run beforeExit or at exit. */
