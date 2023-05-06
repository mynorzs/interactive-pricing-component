const sliderInput = document.querySelector('#slider');
const pageviews = document.querySelector('#pageviews');
const price = document.querySelector('#price-amount');
const paymentToggle = document.querySelector('#toggle-input');
const progressBar = document.querySelector('#progress-bar-before');

const pricesObj = {
  0: ['10k', 8],
  25: ['50k', 12],
  50: ['100k', 16],
  75: ['500k', 24],
  100: ['1M', 36]
}

const changeValues = () => {
  if (paymentToggle.checked) {
    price.textContent = `$${(pricesObj[sliderInput.value][1] * 0.75).toFixed(2)}`;
  } else {
    price.textContent = `$${(pricesObj[sliderInput.value][1]).toFixed(2)}`;
  }
  pageviews.textContent = `${pricesObj[sliderInput.value][0]} Pageviews`;
  progressBar.style.width = `${sliderInput.value}%`

}

window.onload = changeValues();

sliderInput.addEventListener('input', changeValues);
paymentToggle.addEventListener('click', changeValues);
