const ANIMATION_TIME = 500;
const FRAMES_COUNT = 20;
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

const addSmoothSckroll = () => {
  anchors.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
      let scroller = setInterval(() => {
        let scrollBy = coordY / FRAMES_COUNT;
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, ANIMATION_TIME / FRAMES_COUNT);
    });
  });
};

export {addSmoothSckroll};
