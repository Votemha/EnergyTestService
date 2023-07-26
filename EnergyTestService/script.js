let aboutL = 0;
let serviceL = 0;

const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting && aboutL == 0) {
      // добавить ему CSS-класс
      entry.target.classList.add('animationAbout-Left');
      ++aboutL;
    }
  });
});
observer.observe(document.querySelector('.contentAbout'));

const observer1 = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting && serviceL == 0) {
      // добавить ему CSS-класс
      entry.target.classList.add('animationService');
      ++serviceL;
      console.log(serviceL);
    }
  });
});
observer1.observe(document.querySelector('.contentService'));

let i = 0;

const button = document.querySelector('.buttonSlide');
const content = document.querySelector('.contentAbout');
button.addEventListener("click", function(e) {
	if (i % 2 == 0) {
		content.classList.add('animationAbout-Right');
		content.classList.remove('animationAbout-Left');
		button.classList.add('buttonSlide-alt');
		++i
	} else {
		content.classList.add('animationAbout-Left');
		content.classList.remove('animationAbout-Right');
		button.classList.remove('buttonSlide-alt');
		++i
	}
});


let a = 0;

const buttonSO = document.querySelector('.buttonLeft-1');
const contentService = document.querySelector('.contentService');
buttonSO.addEventListener("click", function(e) {
	if (a % 2 == 0) {
		contentService.classList.remove('animationService');
		contentService.classList.remove('animationService-Left-Two');
		contentService.classList.add('animationService-Right-Two');
		buttonSO.classList.add('buttonSlide-alt');
		++a;
		console.log(a)
	} else {
		contentService.classList.remove('animationService-Right-Two');
		contentService.classList.add('animationService-Left-Two');
		buttonSO.classList.remove('buttonSlide-alt');
		++a;
		console.log(a)
	}
});

let b = 0;

const buttonST = document.querySelector('.buttonLeft-2');
buttonST.addEventListener("click", function(e) {
	if (b % 2 == 0) {
		contentService.classList.remove('animationService-Right-One');
		contentService.classList.remove('animationService-Right-Two');
		contentService.classList.remove('animationService-Left-Two');
		contentService.classList.add('animationService-Left-One');
		buttonST.classList.add('buttonSlide-alt');
		++b;
		console.log(b)
	} else {
		contentService.classList.remove('animationService-Left-Two');
		contentService.classList.remove('animationService-Right-Two');
		contentService.classList.remove('animationService-Left-One');
		contentService.classList.add('animationService-Right-One');
		buttonST.classList.remove('buttonSlide-alt');
		++b;
		console.log(b)
	}
});


// let n = 0;

// const buttonMore = document.querySelector('.buttonMore');
// const catalog = document.querySelector('.Catalog');
// buttonMore.addEventListener("click", function(e) {
// 	if (n % 2 == 0) {
// 		catalog.classList.add('animationCatalog-Right');
// 		catalog.classList.remove('animationCatalog-Left');
// 		buttonMore.classList.add('buttonSlide-alt');
// 		++n
// 	} else {
// 		catalog.classList.add('animationCatalog-Left');
// 		catalog.classList.remove('animationCatalog-Right');
// 		buttonMore.classList.remove('buttonSlide-alt');
// 		++n
// 	}
// });



// const meet = document.querySelector(".Meeting")
// window.onscroll = function() {
// 	let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
// 	// console.log('y=' + posTop);
// 	if (posTop > 100 || posTop <= 400) {
// 		if (posTop > 0 && posTop < 700) {
// 			location.href = '#About-block';
// 			console.log('y=' + posTop);
// 		} else if (posTop > 800 && posTop < 900) {
// 			location.href = '#Meeting-block';
// 			console.log('y=' + posTop);
// 		} else if (posTop > 1100 && posTop < 1500) {
// 			location.href = '#Catalog-block';
// 			console.log('y=' + posTop);
// 		} else if (posTop > 1700 && posTop < 2200) {
// 			location.href = '#About-block';
// 			console.log('y=' + posTop);
// 		} 
// 		// else if (posTop > 1100 && posTop < 1300) {
// 		// 	window.scrollTo( 0, 1701 );
// 		// 	console.log('y=' + posTop);
// 		// } else if (posTop > 1500 && posTop < 1699) {
// 		// 	window.scrollTo( 0, 999 );
// 		// 	console.log('y=' + posTop);
// 		// }
// 	} 
// 	console.log('y=' + posTop);
// 	// else if (posTop <= 401 ) {
// 	// 	window.scrollTo( 0, 10 );
// 	// 	console.log('y=' + posTop);
// 	// }
// 	// // else if (posTop >= 400.5 || posTop >= 399) {
// 	// 	// meet.classList.remove('none');
// 	// 	window.scrollTo( 0, 500 );
// 	// 	console.log('y=' + posTop);
// 	// }
// }

// location.href = 'http://www.yandex.ru/';
