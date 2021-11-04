export default function ImgPRLModule(){
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