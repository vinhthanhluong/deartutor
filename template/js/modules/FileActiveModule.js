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

    if ($('.tpost-part-box').length) {
       $('.tpost-part-box').on('click', function () {
            $(this).toggleClass('active');
       });
    }

    if ($('.question-main').length) {
        
       $('.question-tt').on('click', function () {
            $(this).parent('.question-box').stop().toggleClass('active');
            $(this).next('.question-content').stop().slideToggle();
       });
    }
   
}