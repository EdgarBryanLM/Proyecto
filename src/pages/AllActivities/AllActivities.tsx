import React,{useContext} from 'react';
import classes from './allActivities.module.css';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import activitiesContext from '../../data/activities-contexr';
const AllActivities: React.FC = () => {

  const activitiesCtxt = useContext(activitiesContext)
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
            {
              /**Parte del codigo donde se estaran incertando todas las actividades ingresadas */
            }
            {
              activitiesCtxt.activities.map(activity =>(
              <IonRow key= {activity.id}>
                  <IonCol class="ion-text-center">
                    <IonCard>
                      <img src={activity.imageUrl} alt="Activity"/>
                      <IonCardHeader>
                        <IonCardTitle>{activity.hour}</IonCardTitle>
                        <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p>{activity.description}</p>
                        <IonItem lines="none">
                          <IonButton className={classes.FullWidth} fill="clear" >
                            Complete Activity</IonButton>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>
              ))
}
          </IonGrid>
      </IonContent>
      </IonPage>

      
    );
  };
  

export default AllActivities;