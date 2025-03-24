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

document.addEventListener('DOMContentLoaded', function () {
  const whyItems = document.querySelectorAll('.why_item');

  whyItems.forEach((item) => {
    const readMoreBtn = item.querySelector('.why_item_button.more');
    const readLessBtn = item.querySelector('.why_item_button.less');

    readMoreBtn.addEventListener('click', () => {
      item.classList.add('activated');
    });

    readLessBtn.addEventListener('click', () => {
      item.classList.remove('activated');
    });
  });
});
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
  const faqItems = document.querySelectorAll('.faq-section__item-container');
  const readMoreBtn = document.querySelector('.read-more');
  let isExpanded = false;

  // Hide last two items initially
  faqItems.forEach((item, index) => {
    if (index >= 6) {
      item.style.display = 'none';
    }
  });

  readMoreBtn.addEventListener('click', function () {
    isExpanded = !isExpanded;

    faqItems.forEach((item, index) => {
      if (index >= 6) {
        item.style.display = isExpanded ? 'block' : 'none';
      }
    });

    readMoreBtn.innerHTML = isExpanded
      ? 'Read less <svg xmlns="http://www.w3.org/2000/svg" width="26" height="11" viewBox="0 0 26 11" fill="none">' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5045 10.6688L25.8022 6.34779C26.0659 6.08263 26.0659 5.65272 25.8022 5.38756L21.5045 1.06654C21.2407 0.801381 20.8131 0.801381 20.5494 1.06654C20.2857 1.3317 20.2857 1.76161 20.5494 2.02677L23.6943 5.18869H0V6.54666H23.6943L20.5494 9.70858C20.2857 9.97374 20.2857 10.4036 20.5494 10.6688C20.8131 10.934 21.2407 10.934 21.5045 10.6688Z" fill="#162150"/>' +
        '</svg>'
      : 'Read more <svg xmlns="http://www.w3.org/2000/svg" width="26" height="11" viewBox="0 0 26 11" fill="none">' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5045 0.331194L25.8022 4.65221C26.0659 4.91737 26.0659 5.34728 25.8022 5.61244L21.5045 9.93346C21.2407 10.1986 20.8131 10.1986 20.5494 9.93346C20.2857 9.6683 20.2857 9.23839 20.5494 8.97323L23.6943 5.81131H0V4.45334H23.6943L20.5494 1.29142C20.2857 1.02626 20.2857 0.596353 20.5494 0.331194C20.8131 0.0660344 21.2407 0.0660344 21.5045 0.331194Z" fill="#162150"/>' +
        '</svg>';
  });
});
const numbers = document.querySelectorAll('.hiw_item_number');
const titles = document.querySelectorAll('.hiw_item_title');
let index = 0;

function animateElements() {
  numbers.forEach((num, i) => {
    num.style.color = i === index ? '#ed4530' : '';
  });
  titles.forEach((title, i) => {
    title.style.color = i === index ? '#ed4530' : '';
  });
  index = (index + 1) % numbers.length;
  setTimeout(animateElements, 1500);
}

animateElements();
function toggleReview(element) {
  const fullText = element.previousElementSibling;
  const shortText = fullText.previousElementSibling;

  if (fullText.style.display === 'none' || fullText.style.display === '') {
    fullText.style.display = 'inline';
    shortText.style.display = 'none';
    element.textContent = '  see less';
  } else {
    fullText.style.display = 'none';
    shortText.style.display = 'inline';
    element.textContent = '... see more';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const reviews = document.querySelectorAll('.reviews_item');
  const button = document.querySelector('.reviews_button');

  button.addEventListener('click', function (e) {
    e.preventDefault();
    const hiddenReviews = Array.from(reviews).slice(3); // Select reviews beyond the first 3

    if (button.textContent === 'Read More') {
      hiddenReviews.forEach((review) => (review.style.display = 'flex'));
      button.textContent = 'Read Less';
    } else {
      hiddenReviews.forEach((review) => (review.style.display = 'none'));
      button.textContent = 'Read More';
    }
  });
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
