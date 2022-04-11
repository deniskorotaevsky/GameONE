// let ramka = document.querySelector(".ramka");
// /* конфигурация */
// // let width = 77; // ширина картинки
// let count = 1; // видимое количество изображений
// let listElems = carousel.querySelectorAll('li');
// let a = listElems.value;
// let position = 0; // положение ленты прокрутки

// carousel.querySelector('.next').onclick = function() {
//   // сдвиг влево

//   if (screen.width >= 1200) {
//     position += 77 * count;
//     position = Math.min(position, 0)
//     ramka.style.marginLeft = position + 'px';
//   } else if (screen.width >= 991) {
//     position += 61 * count;
//     position = Math.min(position, 0)
//     ramka.style.marginLeft = position + 'px';
//   } else  {
//     console.log("работаем)")
//   }
//   // } else if (screen.width <= 575)  {
//   //   position += 56 * count;
//   //   position = Math.min(position, 0)
//   //   ramka.style.marginLeft = position + 'px';

//   // }
// };

// carousel.querySelector('.prev').onclick = function() {
//   // сдвиг вправо

//   if (screen.width >= 1200) {
//     position -= 77 * count;
//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     position = Math.max(position, -77 * (listElems.length - count));
//     ramka.style.marginLeft = position + 'px';
//     } else if (screen.width >= 991) {
//       position -= 61 * count;
//       // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//       position = Math.max(position, -53 * (listElems.length - count));
//       ramka.style.marginLeft = position + 'px';
//     } else  {
//       console.log("работаем)")
//     }
//     //  else {
//     //   position -= 56 * count;
//     //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     //   position = Math.max(position, -77 * (listElems.length - count));
//     //   ramka.style.marginLeft = position + 'px';
//     // }
// };
