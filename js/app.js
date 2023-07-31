gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})
}
gsap.fromTo('.hero-section', { opacity: 1 }, {
	opacity: 0,
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'center',
		end: '820',
		scrub: true
	}
})
/*const items_image = document.querySelectorAll('.gallery__item') //exist
const cont_left = document.querySelector('.gallery__left')
const cont_right = document.querySelector('.gallery__right')
for (let g = 0; g < 3; g++){
 
for (let i = 0; i < items_image.length; i++) {
	let parentElement = items_image[i].parentNode;
    
	if (parentElement.classList.contains('gallery__left')) {
		cont_left.appendChild(items_image[i].cloneNode(true));
	}
	if (parentElement.classList.contains('gallery__right')) {
		cont_right.appendChild(items_image[i].cloneNode(true));
	}
}
}*/
let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
itemsL.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: -50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
itemsR.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: 50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-750',
			end: 'top',
			scrub: true
		}
	})
})
document.addEventListener("DOMContentLoaded", function () {
	const galleryItems = document.querySelectorAll(".gallery__item");
	// Function to create and append the expanded image container and close button
	function createExpandedImage(imageSrc) {
		const expandedContainer = document.createElement("div");
		expandedContainer.classList.add("expanded-image-container");

		const closeButton = document.createElement("span");
		closeButton.innerHTML = "&times;";
		closeButton.classList.add("close-button");

		const expandedImage = new Image();
		expandedImage.classList.add("expanded-image");
		expandedImage.src = imageSrc;

		expandedContainer.appendChild(closeButton);
		expandedContainer.appendChild(expandedImage);
		document.body.appendChild(expandedContainer);

		// Close the expanded image when clicking on the close button
		closeButton.addEventListener("click", function () {
			closeExpandedImage(expandedContainer);
		});

		// Close the expanded image when clicking on the expanded image itself
		expandedImage.addEventListener("click", function () {
			closeExpandedImage(expandedContainer);
		});

		// Animate the expanded image by setting opacity and pointer-events
		requestAnimationFrame(function () {
			expandedContainer.style.opacity = "1";
			expandedContainer.style.pointerEvents = "auto";
		});
	}

	// Function to close the expanded image
	function closeExpandedImage(expandedContainer) {
		expandedContainer.style.opacity = "0";
		setTimeout(function () {
			expandedContainer.style.pointerEvents = "none";
			document.body.removeChild(expandedContainer);
		}, 300);
	}

	// Function to handle image click event
	function handleImageClick(event) {
		const clickedImage = event.target;

		// Check if the clicked element is an image and has the "gallery__item" class
		if (clickedImage.tagName === "IMG" && clickedImage.classList.contains("gallery__item")) {
			const imageSrc = clickedImage.src;
			createExpandedImage(imageSrc);
		}
	}
	// Add click event listener to all gallery items
	galleryItems.forEach((item) => {
		item.addEventListener("click", handleImageClick);
	});
});
document.addEventListener("DOMContentLoaded", function () {
	const textBlocks = document.querySelectorAll(".text-block");
	// Function to create and append the expanded text container and close button
	function createExpandedText(title, textContent) {
		const expandedContainer = document.createElement("div");
		expandedContainer.classList.add("expanded-text-container");

		const closeButton = document.createElement("span");
		closeButton.innerHTML = "&times;";
		closeButton.classList.add("close-button");

		const expandedTitle = document.createElement("div");
		expandedTitle.classList.add("expanded-text-title");
		expandedTitle.textContent = title;

		const expandedText = document.createElement("div");
		expandedText.classList.add("expanded-text-content");
		expandedText.textContent = textContent;

		expandedContainer.appendChild(closeButton);
		expandedContainer.appendChild(expandedTitle);
		expandedContainer.appendChild(expandedText);
		document.body.appendChild(expandedContainer);

		// Close the expanded text when clicking on the close button
		closeButton.addEventListener("click", function () {
			closeExpandedText(expandedContainer);
		});

		// Close the expanded text when clicking on the expanded text itself
		expandedText.addEventListener("click", function () {
			closeExpandedText(expandedContainer);
		});

		// Animate the expanded text by setting opacity and pointer-events
		requestAnimationFrame(function () {
			expandedContainer.style.opacity = "1";
			expandedContainer.style.pointerEvents = "auto";
		});
	}

	// Function to close the expanded text
	function closeExpandedText(expandedContainer) {
		expandedContainer.style.opacity = "0";
		setTimeout(function () {
			expandedContainer.style.pointerEvents = "none";
			document.body.removeChild(expandedContainer);
		}, 300);
	}

	// Function to handle text click event
	function handleTextClick(event) {
		const clickedText = event.target;

		// Check if the clicked element is a text element and has the "text-block__h" class
		if (clickedText.classList.contains("text-block__h") || clickedText.classList.contains("text-block__p")) {
			const textBlock = clickedText.closest(".text-block");
			const title = textBlock.querySelector(".text-block__h").textContent;
			const textContent = textBlock.querySelector(".text-block__p").textContent;
			createExpandedText(title, textContent);
		}
	}

	// Add click event listener to all text blocks
	textBlocks.forEach((block) => {
		block.addEventListener("click", handleTextClick);
	});
});

// ... (existing JavaScript code) ...

$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger, .header_menu').toggleClass('active');
	});
	$('.header_link').click(function (event) {
		$('.header_burger, .header_menu').toggleClass('active');
	});
});
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Get all anchor links on the page
	const anchorLinks = document.querySelectorAll('a[href^="#"]');

	// Add click event listeners to each anchor link
	anchorLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			// Prevent the default link behavior (jumping to the anchor)
			event.preventDefault();

			// Get the target element's id from the link's href attribute
			const targetId = link.getAttribute('href');

			// Get the target element by its id
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				// Calculate the offset (additional space above the target element)
				const offset = 100; // Adjust the value as needed

				// Calculate the target scroll position
				const targetScrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

				// Scroll to the target element with smooth behavior
				window.scrollTo({
					top: targetScrollPosition,
					behavior: 'smooth',
				});
			}
		});
	});
});





