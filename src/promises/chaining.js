
function async1(number) {
    return new Promise((resolve, reject) => {
        console.log('Async1 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                number += 6;
                return resolve(number);
            } else {
                return reject('Async1 function rejected the promise');
            }
        }, 3000);
    });
}

function async2(number) {
    return new Promise((resolve, reject) => {
        console.log('Async2 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                number += 1;
                return resolve(number);
            } else {
                return reject('Async2 function rejected the promise');
            }
        }, 2000);
    });
}

function async3(number) {
    return new Promise((resolve, reject) => {
        console.log('Async3 function has been executed with ' + number + ' as the argument');
        // Use Set timeout to mock asynchronous activity
        setTimeout(() => {
            if (number < 10) {
                return resolve(number);
            } else {
                return reject('Async3 function rejected the promise');
            }
        }, 5000);
    });
}

console.log('Welcome to the promise chaining example');
async1(1)
    .then(async2)
    .then(async3)
    .then((number) => {
        console.log('Done: number is ' + number);
    })
    .catch((err) => {
        console.log('Catch:' + err)
    });

console.log('I am at the end of the script');

/*
Welcome to the promise chaining example
Async1 function has been executed with 1 as the argument
I am at the end of the script
Async2 function has been executed with 7 as the argument
Async3 function has been executed with 8 as the argument
Done: number is 8 

try also changing line 47: async(1) to async1(5)
*/