window.Controller = function (options) {
    var init = options.init        //这个init是变量    //B
    // console.log('options.init')
    // console.log(options.init)
    let object = {
        view: null,
        model: null,
        init: function (view, model) {  //这个init是属性    //A
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view, model) //这里边的this是object，这里有好几个弯 //C
            //这里的this（C）是init（A）调用的时候传的，而init（A）是controller.init（）调用的，所以这个this就是controller，controller又是Controller返回的，
            //Controller返回的是object，因此，这个this就是object
            //此处调用的init就是options.init，而options是传进来的，在message.js的controller里的init属性里，但是它的几个属性在object里都没有
            //而options里都有，因此将除了init之外的属性（init在刚开始都提取了）都复制到object里就行了
            //之所以这样是因为this.messageList = view.querySelector('#messageList')
            // this.form = view.querySelector('form')
            // this.loadMessage()
            //this.bindEvents.call(this)
            //这几个this最终会传入object
            this.bindEvents.call(this)
        },
    }
    console.log('object')
    console.log(object)
    //debugger
    console.log('options')
    console.log(options)
    //debugger
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    console.log('新的 object')
    console.log(object)
    return object
}