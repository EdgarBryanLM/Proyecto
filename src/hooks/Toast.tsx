import { Toast } from '@capacitor/core';

const useToast = async () => {
  await Toast.show({
    text: 'No se encontraron búsquedas relacionadas',
  });
};

export default useToast;