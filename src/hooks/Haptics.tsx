import { Haptics, HapticsImpactStyle } from '@capacitor/haptics';

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: HapticsImpactStyle.Light });
};

    export default hapticsImpactLight;
