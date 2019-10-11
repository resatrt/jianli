!function () {
    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view     //将传进来的view放到对象的view里存起来       
            this.bindEvents() //this.blindEvents.call(this)
        },
        bindEvents: function () {
            var view = this.view  //因为blindEvents()是无法读取view:null，所以要写这句

            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.addActive()
                } else {
                    this.delateActive()
                }
            })
        },
        addActive: function () {
            this.view.classList.add('active')
        },
        delateActive: function () {
            this.view.classList.remove('active')
        }
    }
    controller.init(view)//controller.init.call(controller,view)
}.call()


