function promises(){
    const successfulPromise = timeout(100).then(result => 'success: ${result}')
    const failingPromise = timeout(200, true).then(null, error => Promise.reject('niepowodzenie: ${error}'),)
    const recoveredPromise = timeout(300, true).then(null, error => Promise.resolve('nie powiadło się i odzyskano: ${error}'),)
    successfulPromise.then(log, logError)
    failingPromise.then(log, logError)
    recoveredPromise.then(log, logError)
}
function asyncAwaits(){
    async function successfulAsyncAwait(){
        const result = await timeout(100)
        return 'sukces: ${result}'
    }
    async function failedAsyncAwait(){
        const result = await timeout(200, true)
        return 'nie powiadło się: ${result}'
    }
    async function successfulAsyncAwait(){
        let result
        try{
        result = await timeout(300, true)
        return 'nie powiadło się: ${result}'
        } catch(error){
            return 'nie powiadło się i odzyskano: ${result}'
        }
    }
    successfulAsyncAwait().then(log, logError)
    failedAsyncAwait().then(log, logError)
    removeEventListener().then(log, logError)
}

function log(...args){
    console.log(...args)
}
function logError(...args){
    console.error(...args)
}
function timeout(duration = 0, shouldReject = false){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(shouldReject){
                reject('Rejected after ${duration}ms')
            }else{
                resolve('resolve after ${duration}ms')
            }
        }, duration)
    })
}