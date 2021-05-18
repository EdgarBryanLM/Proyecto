import React from 'react';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
const AllActivities: React.FC = () => {
    return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
            <IonButtons slot="start">
            <IonMenuButton/>

            </IonButtons>


                  <IonTitle>Todas las actividades</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonGrid>
              <IonRow>
                  <IonCol>
                      <h1>All Activitis work!</h1>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
      </IonPage>

      
    );
  };
  

export default AllActivities;