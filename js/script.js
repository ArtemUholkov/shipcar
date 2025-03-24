const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 300);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
  }
  burger.classList.toggle('active');
}

//FAQ section
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-section__item-container');

  if (faqItems) {
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-section__item-visible'); // Clickable area
      const icon = question.querySelector('img'); // Plus/minus icon
      const answer = item.querySelector('.faq-section__item-hidden');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items and reset their icons
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-section__item-hidden').style.maxHeight = null;
            otherItem.querySelector('.faq-section__item-visible img').src = 'img/faq/plus.png';
            otherItem.querySelector('.faq-section__item-visible img').style.transform =
              'rotate(0deg)';
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand smoothly
          icon.src = 'img/faq/minus.png'; // Change icon
          icon.style.transform = 'rotate(180deg)'; // Rotate for extra effect
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null; // Collapse
          icon.src = 'img/faq/plus.png'; // Reset icon
          icon.style.transform = 'rotate(0deg)'; // Reset rotation
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  function handleScroll() {
    if (window.innerWidth < 768) {
      let main = document.querySelector('.main');
      let mainWrapper = document.querySelector('.main_wrapper');

      if (window.scrollY > 50) {
        // Adjust scroll trigger if needed
        main.style.height = '50vh';
        main.style.position = 'relative';
        mainWrapper.style.position = 'relative';
        mainWrapper.style.bottom = '-600px';
      } else {
        main.style.height = '';
        main.style.position = '';
        mainWrapper.style.position = '';
        mainWrapper.style.bottom = '';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
});

// MOOOOOOOOOOOOOOOOOOOORE
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-section__item-container');
  const readMoreBtn = document.querySelector('.read-more');
  let isExpanded = false;
  let lastScrollPosition = 0;

  // Hide last two items initially
  faqItems.forEach((item, index) => {
    if (index >= 6) {
      item.style.display = 'none';
    }
  });

  readMoreBtn.addEventListener('click', function () {
    isExpanded = !isExpanded;
    lastScrollPosition = window.scrollY;

    faqItems.forEach((item, index) => {
      if (index >= 6) {
        item.style.display = isExpanded ? 'block' : 'none';
      }
    });

    readMoreBtn.innerHTML = isExpanded ? 'Read less' : 'Read more';
  });

  // Hide expanded elements on scroll beyond last open position + 200px
  window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollPosition + 200 && isExpanded) {
      faqItems.forEach((item, index) => {
        if (index >= 6) {
          item.style.display = 'none';
        }
      });
      readMoreBtn.innerHTML = 'Read more';
      isExpanded = false;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const reviews = document.querySelectorAll('.reviews_item');
  const button = document.querySelector('.reviews_button');
  let reviewsExpanded = false;

  button.addEventListener('click', function (e) {
    e.preventDefault();
    const hiddenReviews = Array.from(reviews).slice(3);

    reviewsExpanded = !reviewsExpanded;

    hiddenReviews.forEach((review) => (review.style.display = reviewsExpanded ? 'flex' : 'none'));
    button.textContent = reviewsExpanded ? 'Read Less' : 'Read More';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const whyItems = document.querySelectorAll('.why_item');
  let lastScrollPosition = 0;

  whyItems.forEach((item) => {
    const readMoreBtn = item.querySelector('.why_item_button.more');
    const readLessBtn = item.querySelector('.why_item_button.less');

    readMoreBtn.addEventListener('click', () => {
      item.classList.add('activated');
      lastScrollPosition = window.scrollY;
    });

    readLessBtn.addEventListener('click', () => {
      item.classList.remove('activated');
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollPosition + 200) {
      whyItems.forEach((item) => {
        item.classList.remove('activated');
      });
    }
  });
});

let lastOpenedReview = null;
let lastOpenedPosition = 0;

function toggleReview(element) {
  const fullText = element.previousElementSibling;
  const shortText = fullText.previousElementSibling;

  if (fullText.style.display === 'none' || fullText.style.display === '') {
    // Open the review
    fullText.style.display = 'inline';
    shortText.style.display = 'none';
    element.textContent = ' see less';

    // Track last opened review and scroll position
    lastOpenedReview = { fullText, shortText, button: element };
    lastOpenedPosition = window.scrollY;
  } else {
    // Close the review
    closeReview(fullText, shortText, element);
  }
}

function closeReview(fullText, shortText, button) {
  fullText.style.display = 'none';
  shortText.style.display = 'inline';
  button.textContent = '... see more';
  lastOpenedReview = null;
}

// Listen for scroll and auto-close after scrolling 200px
window.addEventListener('scroll', function () {
  if (lastOpenedReview && window.scrollY > lastOpenedPosition + 200) {
    closeReview(lastOpenedReview.fullText, lastOpenedReview.shortText, lastOpenedReview.button);
  }
});

// Hide expanded reviews on scroll beyond last open position + 200px

//
function toggleTextOnClick(event) {
  const item = event.currentTarget;
  const text = item.querySelector('.whom_item_text');
  const icon = item.querySelector('.whom_icon_wrapper');

  if (text) {
    const isActive = text.classList.contains('active');
    document.querySelectorAll('.whom_item_text').forEach((el) => {
      el.classList.remove('active');
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    });

    if (!isActive) {
      text.classList.add('active');
      text.style.maxHeight = '400px';
      text.style.opacity = '1';
    }
  }

  if (icon) {
    icon.classList.toggle('rotated');
  }
}

// Apply event listeners only for small screens
if (window.innerWidth < 1350) {
  document.querySelectorAll('.whom_left_item, .whom_right_item').forEach((item) => {
    item.addEventListener('click', toggleTextOnClick);
  });
}
