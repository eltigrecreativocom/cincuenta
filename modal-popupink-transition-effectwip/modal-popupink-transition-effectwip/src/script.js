// https://john-dugan.com/javascript-debounce/
var debounce=function(e,t,n){var a;return function(){var r=this,i=arguments,o=function(){a=null,n||e.apply(r,i)},s=n&&!a;clearTimeout(a),a=setTimeout(o,t||200),s&&e.apply(r,i)}};


// Unify JS into single module after resolving accessibility


/* Fill viewport with the background image */

(function () {

  const buttons = document.querySelectorAll("[data-modal_trigger]");
  if (!buttons) {return;}

  const transitionLayer = document.querySelector("[data-modal_lightbox]");
  if (!transitionLayer) {return;}

  const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
  if (!transitionLayer_bg) {return;}

	const aspectRatio = 1.78; // Sprite png frame aspect ratio
	const frames = 25; // Number of sprite png frames
  
  function setLayerDimensions () {

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		let layerHeight;
    let layerWidth;

		if ( windowWidth / windowHeight > aspectRatio ) {
			layerWidth = Math.ceil(windowWidth);
			layerHeight = Math.ceil(layerWidth / aspectRatio);
		} else {
			layerHeight = Math.ceil(windowHeight);
			layerWidth = Math.ceil(layerHeight * aspectRatio);
		}
    
    requestAnimationFrame(() => {
      transitionLayer_bg.style.width = layerWidth * frames + "px";
      transitionLayer_bg.style.height = layerHeight + "px";
    });

  }

	//set transitionBackground dimensions
	setLayerDimensions();
 
  window.addEventListener("resize", debounce(setLayerDimensions, 300, false));

}());




/* Open modal */

(function () {

  const buttons = document.querySelectorAll("[aria-controls^='modal']");
  if (!buttons) {return;}

  const transitionLayer = document.querySelector("[data-modal_lightbox]");
  if (!transitionLayer) {return;}

  const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
  if (!transitionLayer_bg) {return;}
  
  const btnOpenAttr = "aria-controls";
  const visibleClass = "-js-visible";
  const closingClass = "-js-closing";
  const openingClass = "-js-opening";
  
  const modalDelay = 800;
  
  const openAnimStart = (e) => {
    
    // In case it's an anchor
		e.preventDefault();

    const modelId = e.target.getAttribute(btnOpenAttr);
    if (!modelId) {return;}

    const modal = document.getElementById(modelId);
    if (!modal) {return;}

    transitionLayer.classList.add(visibleClass, openingClass);

		setTimeout(() => {
			  modal.classList.add(visibleClass);
		}, modalDelay);

  };

  for (const btn of buttons) {
    btn.addEventListener("click", openAnimStart, false);
  }

}());



/* Close modal from clicking modal_bg or button */

(function () {

  const modals = document.querySelectorAll(".modal");
  if (!modals) {return;}

  const transitionLayer = document.querySelector("[data-modal_lightbox]");
  if (!transitionLayer) {return;}

  const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
  if (!transitionLayer_bg) {return;}
  
  const btnCloseAttr = "data-modal_close";
  const visibleClass = "-js-visible";
  const closingClass = "-js-closing";
  const openingClass = "-js-opening";
  
  const isNotCloseObj = (obj) => {
    return !(obj.classList.contains(visibleClass) || obj.hasAttribute(btnCloseAttr));
  };
  
  const isVisible = (obj) => {
    return obj.classList.contains(visibleClass);
  };
  
  const closeAnimStart = (e) => {
    
    // In case it's an anchor
		e.preventDefault();

    const obj = e.target;
    if (isNotCloseObj(obj)) {return;}

    const modal = isVisible(obj) ? obj : obj.parentElement.parentElement;
    if (!modal) {return;}

    transitionLayer.classList.add(closingClass);
    transitionLayer.classList.remove(openingClass);
    modal.classList.remove(visibleClass);

    transitionLayer_bg.addEventListener("animationend", () => {
      transitionLayer.classList.remove(closingClass, visibleClass);
    }, {once: true});

  }

  for (const modal of modals) {
    modal.addEventListener("click", closeAnimStart, false);
  }

}());


/* Question button click */

(function () {
  const buttons = document.querySelectorAll("[aria-controls^='modal']");
  console.log(buttons);
  const clickedClass = "-js-clicked";

  for (const btn of buttons) {

    btn.addEventListener("click", (e) => {
      e.target.classList.add(clickedClass);
      e.target.addEventListener("animationend", (e) => {
        e.target.classList.remove(clickedClass);
      }, false);
    }, false);

    btn.addEventListener("blur", (e) => {
      e.target.classList.remove(clickedClass);
    }, false);

  }
}());