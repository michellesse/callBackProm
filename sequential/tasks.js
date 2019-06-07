const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne(){
        try{
            await sleep(4000);
            return 'ONE VALUE waiting 4 sec';
        }
        catch(e){
            console.log(e);            
        }        
    },
    async taskTwo() {
        try {
            await sleep(2000);
            return 'TWO VALUE waiting 2 sec';
        }
        catch (e) {
            console.log(e);
        }        
    },
    async taskConError() {
        try {
            throw new Error('HOUSTON WE HAVE A PROBLEM...')
            await sleep(4000);
            return 'Tarea con error, no se ejecuta';
        }
        catch (e) {
            console.log(e);
        }        
    }
}