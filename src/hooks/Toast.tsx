import { Toast } from '@capacitor/toast';

const useToast = async (mensaje:string) => {
  await Toast.show({
    text: mensaje,
  });
};

export default useToast;