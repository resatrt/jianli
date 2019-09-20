!function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);//这是tween引入的部分
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);//请求动画帧率，这个API是浏览器自己决定的
        },
        scrollToElements: function (element) {
            let distance = element.offsetTop
            let currentTop = window.scrollY //表示当前的Y轴坐标    //这个是tween的另一部分
            let targetTop = distance - 80 //目标Y轴坐标
            let s = targetTop - currentTop
            var coords = { y: currentTop };
            var t = Math.abs((s / 100) * 300)  //时间不能为负数（s的值会为负数） 
            if (t > 500) { t = 500 }
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () { //这个函数他会自动更新coords这个变量的值，每更新一次就会运行一下这个函数
                    window.scrollTo(0, coords.y)
                    //console.log(coords.y)
                })
                .start();
        },
        bindEvents: function () {
            let aTags=this.view.querySelectorAll('nav.menu > ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x)=> {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href')

                    let element = document.querySelector(href) //只获取
                    this.scrollToElements(element)
                }

            }
        },
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
    }
    controller.init(view)
}.call()
