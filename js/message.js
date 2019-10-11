!function () {
    var view = View('section.message')
    var model = Model({ resourceName: 'Message' })
    var controller = Controller({
        init: function (view, model) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessage()
        },
        loadMessage: function () {
            this.model.fetch()
                .then((message) => {// 获取需要更新的 message
                    let array = message.map((item) => item.attributes)//用map函数清洗数据
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value //获取内容
            let name = myForm.querySelector('input[name=name]').value//获取名字

            this.model.save({
                'name': name,
                'content': content
            })
                .then(function (Object) {
                    let li = document.createElement('li')
                    li.innerText = `${Object.attributes.name}:${Object.attributes.content}` //这里因为没有像上面的array提取
                    messageList.appendChild(li)   //这4句是为了直接在页面显示输入内容
                    myForm.querySelector('input[name=content]').value = ''//清空密码输入框的内容
                    console.log('我走到这里了')
                })
        }
    })

    // var controller = {
    //     view: null,
    //     model: null,
    //     messageList: null,
    //     init: function (view, model) {
    //         this.view = view
    //         this.model = model
    //         console.log(this)
    //         messageList = view.querySelector('#messageList')
    //         this.form = view.querySelector('form')
    //         this.model.init()
    //         this.loadMessage()
    //         this.bindEvents()
    //     },
    //     loadMessage: function () {
    //         this.model.fetch()
    //             .then((message) => {// 获取需要更新的 message
    //                 let array = message.map((item) => item.attributes)//用map函数清洗数据
    //                 array.forEach((item) => {
    //                     let li = document.createElement('li')
    //                     li.innerText = `${item.name}:${item.content}`
    //                     this.messageList.appendChild(li)
    //                 })
    //             })
    //     },
    //     bindEvents: function () {
    //         this.form.addEventListener('submit', (e) => {
    //             e.preventDefault()
    //             this.saveMessage()
    //         })
    //     },
    //     saveMessage: function () {
    //         let myForm = this.form
    //         let content = myForm.querySelector('input[name=content]').value //获取内容
    //         let name = myForm.querySelector('input[name=name]').value//获取名字

    //         this.model.save({
    //             'name': name,
    //             'content': content
    //         })
    //             .then(function (Object) {
    //                 let li = document.createElement('li')
    //                 li.innerText = `${Object.attributes.name}:${Object.attributes.content}` //这里因为没有像上面的array提取
    //                 messageList.appendChild(li)   //这4句是为了直接在页面显示输入内容
    //                 myForm.querySelector('input[name=content]').value = ''//清空密码输入框的内容
    //                 console.log(Object)
    //             })
    //     }
    // }

    controller.init(view, model) //和view一样，model也要传进来
}.call()

