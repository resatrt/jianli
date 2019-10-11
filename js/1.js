window.jQuery.ajax = function ({ url, method, body, headers }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest
        request.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}
var promise=new Promise(function(resolve,reject){

    if (操作成功){
        resolve(value)
    }else{
        reject(error)
    }
})

promise.then(
    function(value){
    //成功之后运行这个函数
    },
    function(error){
        //失败之后运行这个函数
    }
)