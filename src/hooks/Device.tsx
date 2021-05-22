import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

const caracteristicas = async () => {
    return await Device.getInfo();
}

export default caracteristicas;

