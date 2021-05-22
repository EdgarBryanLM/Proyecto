import { Capacitor,Plugins  } from '@capacitor/core';
const { Haptics } = Plugins;
const hapticsVibrate = async () => {
  await Haptics.vibrate();
  
};

    export default hapticsVibrate;
