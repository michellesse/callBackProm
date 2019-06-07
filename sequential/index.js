const { taskOne, taskTwo, taskConError} = require('./tasks');

async function main(){
    console.time('Midiendo el tiempo');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();    
    console.timeEnd('Midiendo el tiempo');

    console.log('Tasks One returned', valueOne);
    console.log('Tasks Two returned', valueTwo);
}

main();