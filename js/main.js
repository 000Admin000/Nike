

/*--------------------------------------------------------------*/

let timeOut;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-50);
		timeOut = setTimeout('up()', 5);
	} else {
        clearTimeout(timeOut);
        return false;
    } ;
}



/*--------------------------------------------------------------*/


let header = document.getElementById('header');
window.addEventListener('scroll', (e) => {
    let positionY = window.scrollY;
    
    if(positionY > 100) {
        header.className = 'header header-active';
    } else {
        header.className = 'header';
    };
});


/*--------------------------------------------------------------*/

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = ((windowScroll / windowHeight) * 100);
	progress.style.width = per + '%';
};

/*--------------------------------------------------------------*/

burger.addEventListener('click', function(){

	let burger = document.getElementById('burger');
	let body = document.querySelector('body');
	let menuList = document.getElementById('menu-list');
	// let menu = document.getElementById('menu');
	// let info = document.getElementById('info');


	menuList.classList.toggle('active-menu-list');
	burger.classList.toggle('burger-active');
	body.classList.toggle('overflow');
	// info.classList.toggle('info-active');
});

/*--------------------------------------------------------------*/

































