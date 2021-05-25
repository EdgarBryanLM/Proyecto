import React,{useRef,useContext, useState}from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon, IonLabel, IonInput } from '@ionic/react';
import Toast from "../../hooks/Toast";
import { Device } from '@capacitor/device';


const celular: React.FC = () => {
  
  
    const caracteristicas = async () => {
        const info = await Device.getInfo();
        Toast("Model:"+info.model+" Plataform:"+info.platform+" isVirtual:"+info.isVirtual+" manufacturer:"+info.manufacturer+" plataform:"+info.platform);
        console.log(info);
    }
  
    
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
                    <IonLabel position="floating">Descripcion</IonLabel>
                 
                </IonItem>
                </IonCol>
            </IonRow>
           
            <IonRow>
                  <IonCol className= "ion-text-center ion-margin-top">
                      <IonButton onClick={caracteristicas} expand="block" fill="outline">Caracteristicas del Celular</IonButton>

                  </IonCol>
              </IonRow>
         
        </IonGrid>
    </IonContent>
    </IonPage>

    );
};

export default celular;