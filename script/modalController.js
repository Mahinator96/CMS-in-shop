// Реализация открытия и закрытия модального окна
import { form } from "./elems.js";
import { hidePreview } from "./previewController.js";

// Ф-ия открытия модального окна
const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
}
// Ф-ия закрытия модального окна
const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
  // Спрятать превью и убрать src
  hidePreview();
  // Очистить форму
  form.reset();

}

// export функции с деструктуризацией
export const modalController = ({modal, btn, classOpen, classClose,}) => {
  // При клике на кнопку "добавить товар"
  btn.addEventListener('click', () => {
    // Открыть модальное окно
    openModal(modal, classOpen);
  });
  // При клике на модальное окно (деструктуризация для target)
  modal.addEventListener('click', ({target}) => {
    // Если это подложка или кнопка
    if(target === modal || target.classList.contains(classClose)) {
      // Закрываем модальное окно
      closeModal(modal, classOpen);
    }
  });
};