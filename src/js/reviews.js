import iziToast from 'izitoast';

let reviewsData = []; // To store the fetched reviews
let currentIndex = 0; // To keep track of the current reviews index

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) throw new Error('Помилка сервера');
    reviewsData = await response.json();
    console.log(reviewsData);
    renderReviews(reviewsData); // Initial render
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити відгуки. Спробуйте пізніше.',
    });
    document.querySelector('.menu-reviews').innerHTML =
      '<li class="menu-item-reviews">Not found</li>';
  }
}

function renderReviews(reviews) {
  const reviewsContainer = document.querySelector('.menu-reviews');
  reviewsContainer.innerHTML = ''; // Clear previous reviews

  // Slice the current reviews to display (only 2 at a time)
  const reviewsToDisplay = reviews.slice(currentIndex, currentIndex + 2);

  reviewsToDisplay.forEach(review => {
    const reviewItem = `
      <li class="menu-item-reviews">
        <p class="para-reviews">${review.review}</p>
        <div class="container-reviews">
          <img class="feat-icon" src="${review.avatar_url}" alt="${review.author}">
          <p class="para-img">${review.author}</p>
        </div>
      </li>
    `;
    reviewsContainer.innerHTML += reviewItem;
  });

  updateNavigationButtons(); // Update button states based on current index
}

function updateNavigationButtons() {
  const nextButton = document.querySelector('.icon-arrow-rigth');
  const prevButton = document.querySelector('.icon-arrow-left');

  // Disable "Next" if at the end of the list
  if (currentIndex + 2 >= reviewsData.length) {
    nextButton.classList.add('icon-disabled');
    nextButton.classList.remove('icon-active');
  } else {
    nextButton.classList.remove('icon-disabled');
    nextButton.classList.add('icon-active');
  }

  // Disable "Previous" if at the start of the list
  if (currentIndex <= 0) {
    prevButton.classList.add('icon-disabled');
    prevButton.classList.remove('icon-active');
  } else {
    prevButton.classList.remove('icon-disabled');
    prevButton.classList.add('icon-active');
  }
}

function setupSVGButtonNavigation() {
  const nextButton = document.querySelector('.icon-arrow-rigth');
  const prevButton = document.querySelector('.icon-arrow-left');

  nextButton.addEventListener('click', () => {
    if (currentIndex + 2 < reviewsData.length) {
      currentIndex += 2; // Move to the next 2 reviews
      renderReviews(reviewsData); // Re-render with new index
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex - 2 >= 0) {
      currentIndex -= 2; // Move to the previous 2 reviews
      renderReviews(reviewsData); // Re-render with new index
    }
  });
}

// Fetch reviews and initialize navigation
fetchReviews();
setupSVGButtonNavigation();
