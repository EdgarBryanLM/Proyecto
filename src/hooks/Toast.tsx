import { Toast } from '@capacitor/core';

const useToast = async (mensaje:string) => {
  await Toast.show({
    text: mensaje,
  });
};

export default useToast;