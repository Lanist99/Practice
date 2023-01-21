const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // tabs
  const tabNavItems = document.querySelectorAll(".tabs-deals__button");
  const tabItems = document.querySelectorAll(".item-tabs");
  document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest(".tabs-deals__button")) {
      tabNavItems.forEach((tabNavItem, index) => {
        if (tabNavItem.classList.contains("active")) {
          currentActiveIndex = index;
          tabNavItem.classList.remove("active");
        }
        if (tabNavItem === targetElement) {
          newActiveIndex = index;
        }
        
      });
      targetElement.classList.add("active");
      tabItems[currentActiveIndex].classList.remove("active");
      tabItems[newActiveIndex].classList.add("active");
    }  
  });