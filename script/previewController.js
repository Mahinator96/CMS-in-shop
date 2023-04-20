import { form, image, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

// Функция для передачи src изображению
const showPreviw = (src) => {
  // Показать изображение (стояло "none")
  preview.style.display = "block";
  // Передаём src изображению полученную из toBase64
  preview.src = src;
}

export const hidePreview = () => {
  // Если передать пустую строку - свойство display исчезнет
  preview.style.display = '';
  preview.src = '';
}

// Для отображения превью загружаемой картинки
export const previewController = () => {
  // input у которого аттрибут name="image"
  const imageFile = form.image;
  // image - это id элемента input (необходимо создать async для того, чтобы передать правильный путь к картинке - иначе вернётся [object Promice])
  image.addEventListener('change', async () => {
    // проверка на наличие каких-либо файлов(при изминении input)
    if(imageFile.files.length) {
      // Получение пути для изображения - использовать await для того, чтобы дождаться выполнения Promise в toBase64()
      const src = await toBase64(imageFile.files[0]);
      showPreviw(src);
    }
  });
};
