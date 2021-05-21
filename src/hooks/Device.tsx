import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

const caracteristicas = async () => {
    const info = await Device.getInfo();
}

export interface dispositivo {
    id: string;
}

