let img = new Image();   // 이미지 객체 생성
img.src = 'image.jpg';   // 이미지 경로 설정
img.onload = function() {
  // 이미지가 로드되면 실행할 코드
  console.log('Image is loaded');
};


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2,{
      x: 0
    });

  } else {
    // // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2,{
      x: 100
  });
  }
}, 300));
// _.throttle(함수, 시간ms)



toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션); 
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7 // 0.7, 1.4, 2.1, 2.8
  });
});

// new Swiper(선택자, 옵션)

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: 'awards .swiper-prev',
    nextEl: 'awards .swiper-next'
  }



});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //처음에는 보이기 때문에 false로 설정
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // !를 이용하여 지속적으로 반대값을 반환하도록 함
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

floatingObject('.floating1', 1, 15); //선택자, 시간, 크기
floatingObject('.floating2', .5, 15); //선택자, 시간, 크기
floatingObject('.floating3', 1.5, 20); //선택자, 시간, 크기

function floatingObject(selector, delay, size) {
  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 확인
      triggerHook: .8 //0.8 뷰포드에 걸리면 트리거가 되어 아래 실행

    })
    .setClassToggle(spyEl, 'show') //show 클래스 생성
    .addTo(new ScrollMagic.Controller());


});
