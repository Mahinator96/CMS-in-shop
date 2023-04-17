// Приведение данных в 64-битном формати (в виде строки)
export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    // Конструктор создвёт Reader который считывает получаемый файл
    const reader = new FileReader();
    // Когда файл скачается
    reader.addEventListener('loadend', () => {
      // При удачной загрузке отдать всё содиржимое файла
      resolve(reader.result);
    });
    // Если произошла ошибка
    reader.addEventListener('error', (err) => {
      reject(err);
    });
    // Само событие которое должен проводить Reader - считать данные как base64-кодированный URL. (если этого не добавить, то не выполнится ни resolve и не reject)
    reader.readAsDataURL(file);
  });
};