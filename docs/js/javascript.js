

// フェード
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});

// スライド実績

$('.slider').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    arrows: false,
    cssEase: 'linear',
	pauseOnHover: false,
responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 2
    }
}]
});

// スライドレビュー

$('.slider02').slick({
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 300,
    arrows: true,
responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1
    }
}]
});


// パララックス
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});


//setTimeout関数でfadeOut()の実行を遅延させる
setTimeout(function() {
    $('#fademe').fadeOut();
}, 5000);
