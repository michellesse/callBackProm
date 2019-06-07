const { taskOne, taskTwo, taskConError } = require('./tasks');

async function main() {
    try{
        console.time('Midiendo el tiempo');
        const results = await Promise.all([taskOne(), taskTwo(), taskConError()]);        
        console.timeEnd('Midiendo el tiempo');

        console.log('Tasks One returned', results[0]);
        console.log('Tasks Two returned', results[1]);
        console.log('Tasks Two returned', results[2]);
    } catch(e){
        console.log(e);        
    }    
}

main();