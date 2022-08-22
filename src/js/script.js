window.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector(".menuBtn");
	const navMenu = document.querySelector("#menu");
	const logo = document.querySelector(".nav_logo");
	const topNavSwitch = document.querySelector(".topNavSwitch");
	const scrollDown = document.querySelector(".scrollDown");
	const main = document.querySelector("main");
	const save = topNavSwitch.innerHTML;
	menuBtn.addEventListener("click", () => {
		if (!menuBtn.classList.contains("open")) {
			menuBtn.classList.add("open");
			navMenu.classList.add("active_nav");
			topNavSwitch.innerHTML = "";
			topNavSwitch.insertAdjacentHTML("afterbegin", logo.innerHTML);
			
		} else {
			menuBtn.classList.remove("open");
			navMenu.removeAttribute("class");
			topNavSwitch.innerHTML = "";
			topNavSwitch.insertAdjacentHTML("afterbegin", save);
		}
	});

	try {	
	
		const h = main.offsetTop - 105;
		scrollDown.addEventListener("click", (e) => {
			window.scrollTo({
				left: 0,
				top: h,
				behavior: "smooth"
			});
		});
	} catch{}
	try {
	const item = document.querySelectorAll(".item");
	const itemTitle = document.querySelectorAll(".item_footer h3 a");
		
		
		item.forEach(item => {
			item.setAttribute(
				"title", 
				item.children[1]
				.children[0]
				.textContent.trim()
			);
		})

		itemTitle.forEach(title => {
			if(title.textContent.length >= 20) {
				title.textContent = title.textContent.slice(0, 20) + "..."
			}
		});

	} catch{}
	try {
		new Swiper(".swiper-container", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1
				  },
				480: {
					slidesPerView: 1
				  },
				768: {
				  slidesPerView: 2
				},
				1024: {
				  slidesPerView: 3
				}
			  }
		  });
	} catch{}
});