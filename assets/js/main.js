/*
	Halcyonic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Nav.

		// Title Bar.
			

		// Panel.
			/*$(
				
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});*/

})(jQuery);


let menuBut=document.getElementById("menuBut");
let sideNav=document.getElementById("navPanel");
menuBut.onclick=()=>{
	//menuBut.classList.toggle("toggle");
	
		menuBut.classList.toggle("togglee-close");
		sideNav.classList.toggle("navPanel-open");
		sideNav.style.transform="translateX(0);"
		document.getElementById("page-wrapper").classList.toggle("side");
		document.getElementById("titleBar").classList.toggle("side");

}

let navLink=Array.from(document.querySelectorAll(".navPanel nav a"));
function closeOrOpenNav()
{
		menuBut.classList.toggle("togglee-close");
		sideNav.classList.toggle("navPanel-open");
		sideNav.style.transform="translateX(0);"
		document.getElementById("page-wrapper").classList.toggle("side");
		document.getElementById("titleBar").classList.toggle("side");
}
navLink.forEach((Element)=>{
	Element.onclick=()=>{
		if(!Element.classList.contains("dropdown-toggle"))
		{
			closeOrOpenNav();
		}
	}
})

document.querySelector("#titleBar .title .link").onclick=()=>{
	location.replace("../../index.html");
}