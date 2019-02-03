
const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Asynch operation 1..');
        resolve(1);
    }, 2000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Asynch operation 2..');
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log('Result', result));

//Promise.race([p1, p2])
//    .then(result => console.log('Result', result));    