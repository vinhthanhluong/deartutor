export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    if ($('.header-acount')) {
        const $act = $('.header-acount');

        $(document).mouseup(function (e) {

            if (!$act.is(e.target) && $act.has(e.target).length === 0) {
                $act.removeClass('active');
            }

        });

        $('.acount-title').on('click', function () {
            $act.toggleClass('active');
        });

    }

    if ($('.header-user')) {
        const $user = $('.header-user');

        $(document).mouseup(function (e) {

            if (!$user.is(e.target) && $user.has(e.target).length === 0) {
                $user.removeClass('active');
            }

        });

        $('.user-title').on('click', function () {
            $user.toggleClass('active');
        });

    }

    let img = document.querySelectorAll('.imgPRL img');
    let _h = window.innerHeight;
    console.log(_h);
    if (img.length > 0 && window.innerWidth > 1024) {
        window.addEventListener('scroll', () => {
            img.forEach((el) => {
                let pos = el.getBoundingClientRect().top;
                console.log(pos);
                if (pos > - _h / 2 && pos < _h) {
                    let Y = (pos / _h * 100);

                    el.style.transform = `translateY(` + Y + `px)`;
                }
            });
        });
    }
}