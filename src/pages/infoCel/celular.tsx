import React,{useRef,useContext, useState}from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon, IonLabel, IonInput } from '@ionic/react';
import { Plugins,Toast,Device } from '@capacitor/core';
const celular: React.FC = () => {
    const { AnyPlugin } = Plugins;
    const logDeviceInfo = async () => {
        const info = await Device.getInfo();
      
        console.log(info);
      };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
          <IonMenuButton/>

          </IonButtons>
                <IonTitle>Informacion del Dispositivo</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonGrid>
           
            <IonRow>
                <IonCol>
                <IonItem>
                <IonCardContent >
                Nombre: {}
                </IonCardContent>
                </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                <IonItem>
                    <IonLabel position="floating">Descripcion</IonLabel>
                 
                </IonItem>
                </IonCol>
            </IonRow>
           
            
         
        </IonGrid>
    </IonContent>
    </IonPage>

    );
};

export default celular;