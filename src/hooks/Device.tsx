import { Device } from '@capacitor/device';


const caracteristicas = async () => {
    const info = await Device.getInfo();
  
    console.log(info);
  };

export default caracteristicas;

