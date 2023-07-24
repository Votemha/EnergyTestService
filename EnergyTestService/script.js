const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('animationAbout-Left');
    }
  });
});
observer.observe(document.querySelector('.contentAbout'));

let i = 0;

const button = document.querySelector('.buttonSlide');
const content = document.querySelector('.contentAbout');
button.addEventListener("click", function(e) {
	if (i % 2 == 0) {
		content.classList.add('animationAbout-Right');
		content.classList.remove('animationAbout-Left');
		button.classList.add('buttonSlide-alt');
		console.log("click");
		++i
	} else {
		content.classList.add('animationAbout-Left');
		content.classList.remove('animationAbout-Right');
		button.classList.remove('buttonSlide-alt');
		console.log("click");
		++i
	}
});



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
