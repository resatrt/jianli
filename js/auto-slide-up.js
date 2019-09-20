!function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    } //先给特殊标签添加一个类
    setTimeout(
        function () {
            findClosestAndRemoveOffset()
        }, 300)             //这个是为了第一个offset动画效果

    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset()
    })

    /*下面的是方法 */
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset') //将标签去掉，效果还原
        let id = specialTags[minIndex].id
        //console.log(id)
        let a = document.querySelector('a[href ="#' + id + '"]')
        //console.log(a)
        let li = a.parentNode //a标签的父元素
        let parentLi = li.parentNode.children//li的父元素，也就是li和li的兄弟（这个是为了先移除active）
        for (let i = 0; i < parentLi.length; i++) {
            parentLi[i].classList.remove('highlight')
        }

        li.classList.add('highlight')
    }
    let LiaTags = document.querySelectorAll('nav.menu > ul > li') //document.getElementsByClassName('menuTigger')
  
    for (let i = 0; i < LiaTags.length; i++) {
        LiaTags[i].onmouseenter = function (x) {  
            
            x.currentTarget.classList.add('active')
           
        }
        LiaTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()
