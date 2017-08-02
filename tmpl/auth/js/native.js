window.onload = function () {

    // Nav hamburger
    let hamburger = document.querySelector('.hamburger'),
        navList = document.querySelector('.nav-list'),
        listItems = document.querySelectorAll('.nav-list__item');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        navList.classList.toggle('hidden');
    });

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function () {
            navList.classList.add('hidden');
            hamburger.classList.remove('is-active');
        });
    };

    // or
    // hamburger.onclick = function () {
    //     hamburger.classList.toggle('is-active');
    //     navList.classList.toggle('hidden');
    // };

    // for (let i = 1; i < listItems.length; i++) {
    //     listItems[i].onclick = function () {
    //         navList.classList.add('hidden');
    //         hamburger.classList.remove('is-active');
    //     };
    // };

    // Bind service title to btn hover
    let buttons = document.querySelectorAll('.service__btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', function () {
            this.closest('.services__item').classList.add('title--hover');
        });
        buttons[i].addEventListener('mouseout', function () {
            this.closest('.services__item').classList.remove('title--hover');
        });
    }
    
    // or

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].onmouseover = function () {
    //         this.parentElement.parentElement.classList.add('title--hover');
    //     };
    //     buttons[i].onmouseout = function () {
    //         this.parentNode.parentNode.classList.remove('title--hover');
    //     };
    // };

};
