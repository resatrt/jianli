window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () { //初始化也是操作数据，所以将它移到model里
            var APP_ID = 'zRB0Ais0Bx9MFp6GAGMVsRyd-gzGzoHsz'
            var APP_KEY = 'ptVyDtTayVK28bHshIEUKkRS'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find() //返回的是Promise对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            // message.set(object);
            // console.log(message.save(name, content))
            return x.save(object)//返回的是Promise对象       
        }
    }

}