!function () {
    var view = View('section.message')
    var model = {
        //获取数据
        init: function () { //初始化也是操作数据，所以将它移到model里
            var APP_ID = 'zRB0Ais0Bx9MFp6GAGMVsRyd-gzGzoHsz';
            var APP_KEY = 'ptVyDtTayVK28bHshIEUKkRS';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
            console.log('运行到这里没有错误')
        },
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() //返回的是Promise对象
        },
        //创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            // message.set({   //将单个内容变成多个用对象
            //     'name': name,  //这个set会将这个对象的两个值并为一个键值对
            //     'content': content  //即  name:content  
            // });
            // console.log(message.save(name, content))
            return message.save({   //将单个内容变成多个用对象
                'name': name,
                'content': content
            })//返回的是Promise对象       
        }
    }
    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            console.log(this)
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
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

            this.model.save(name, content)
                .then(function (Object) {
                    let li = document.createElement('li')
                    li.innerText = `${Object.attributes.name}:${Object.attributes.content}` //这里因为没有像上面的array提取
                    messageList.appendChild(li)   //这4句是为了直接在页面显示输入内容
                    myForm.querySelector('input[name=content]').value = ''//清空密码输入框的内容
                    console.log(Object)
                })
        }
    }

    controller.init(view, model) //和view一样，model也要传进来
}.call()

/*
//创建TestObject表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();


testObject.set('words', 'Hello world!');
//如果保存成功则运行console.log
testObject.save().then(function (testObject) {
  console.log('保存成功。')
})
*/