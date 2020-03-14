const sectionOne = document.querySelector(".section1__content");
const sections = document.querySelectorAll(".section");

const options = {
	threshold: 0,
	rootMargin: "-100px"
};

const observer = new IntersectionObserver(function(entries, observer){
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			return;
		}
		console.log(entry.target);
		entry.target.classList.toggle("inverse");
	});
}, options);

// observer.observe(sectionOne);

sections.forEach(section => {
	observer.observe(section);
});
// observer.observe(sections);
