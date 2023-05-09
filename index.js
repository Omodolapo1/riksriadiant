const loaderWrapper = document.querySelector('.loaderWrapper');

const fadeEffect = setInterval(() => {
    if (!loaderWrapper.style.opacity) {
        loaderWrapper.style.opacity = 1;
    }
    if (loaderWrapper.style.opacity > 0) {
        loaderWrapper.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 170); 