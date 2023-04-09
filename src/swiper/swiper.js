import Swiper, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    739: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1116: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1493: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1870: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
  grabCursor: true,
});
export default swiper;
