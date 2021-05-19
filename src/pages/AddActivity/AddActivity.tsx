import React,{useRef,useContext}from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import {useHistory} from 'react-router-dom'
import activitiesContext, { ActivityType } from '../../data/activities-contexr';
const AddActivity: React.FC = () => {
    //Variable que nos ayuda a poder manejar nuestra navegacion
    //de paginas
    const history = useHistory();


    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const typeInput = useRef<HTMLIonSegmentElement>(null);
    const   hourInput = useRef<HTMLIonDatetimeElement>(null);

    //En esta parte obtenemos nuestros diferentes datos obtenidos con los Inputs
    const activitiesCtxt = useContext(activitiesContext);
    const addActivity =()=>{
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const typeAct = typeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const  startHour = startDate.getHours()+":"+startDate.getMinutes();

        if(title && description && typeAct && startHour){
            activitiesCtxt.addActivity(title,description,startHour,typeAct);
            history.replace('/all-activities');
        }
    };

    return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
              <IonButtons slot="start">
            <IonMenuButton/>

            </IonButtons>
                  <IonTitle>Añadir Actividades</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonGrid>
              <IonRow>
                  <IonCol className="ion-text-center">
                      <IonSegment ref={typeInput}>
                          <IonSegmentButton value="work">
                            <IonLabel>Work</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton value="rest">
                            <IonLabel>Rest</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton value="hobby">
                            <IonLabel>Hobby</IonLabel>
                          </IonSegmentButton>
                      </IonSegment>
                    
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Activity Title</IonLabel>
                      <IonInput ref={titleInput} type="text"></IonInput>
                  </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Activity Description</IonLabel>
                      <IonInput ref={descriptionInput} type="text"></IonInput>
                  </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Starting hour</IonLabel>
                     <IonDatetime ref={hourInput} displayFormat="h:mm A" pickerFormat="h:mm A" value={new Date().toISOString()}></IonDatetime>
                  </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol className= "ion-text-center ion-margin-top">
                      <IonButton onClick={addActivity} expand="block" fill="outline">Agregar actividad</IonButton>

                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
      </IonPage>

      
    );
  };
  

export default AddActivity;