import { modalBtn, modal }    from './elems.js';
import { formCotroller }      from './formController.js';
import { modalController }    from './modalController.js';
import { previewController }  from './previewController.js';
import { tableController }    from './tableController.js';


const init = () => {
  modalController({
    modal: modal,
    btn: modalBtn,
    classOpen: 'd-block',
    classClose: 'btn-close',
  });
  
  previewController();
  tableController();
  formCotroller();
};

init();