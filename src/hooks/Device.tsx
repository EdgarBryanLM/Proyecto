import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

const caracteristicas = async () => {
    const info = await Device.getInfo();
console.log(info);
    return await Device.getInfo();
}

export default caracteristicas;

