import { Plugins, HapticsImpactStyle } from '@capacitor/core';

const { Haptics } = Plugins;

export class HapticsExample {
  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style: style,
    });
    
  }
}


  

    export default HapticsExample;
