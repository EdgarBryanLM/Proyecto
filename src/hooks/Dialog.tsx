import { Dialog } from '@capacitor/dialog';
const showAlert = async () => {
    await Dialog.alert({
      title: 'Aviso',
      message: 'Rellene todos los datos',
    });
  };

  export default showAlert;