import React,{useRef,useContext, useState}from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import {useHistory} from 'react-router-dom'
import activitiesContext, { ActivityType } from '../../data/activities-context';
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
    const [toastMsg, setToastMsg] = useState<string>('');
    
    const addActivity =()=>{
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const typeAct = typeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const  startHour = startDate.getHours()+":"+startDate.getMinutes();

        if(title && description && typeAct && startHour){
            activitiesCtxt.addActivity(title,description,startHour,typeAct);
            setToastMsg("Actividad agregada");
            history.replace('/all-activities');
        }
    };

    return (

        <React.Fragment>

      <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={() => setToastMsg("")}/>

    


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
                            <IonLabel>Trabajar</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton value="rest">
                            <IonLabel>Descanso</IonLabel>
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
                      <IonLabel position="floating">Titulo de la Actividad</IonLabel>
                      <IonInput ref={titleInput} type="text"></IonInput>
                  </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Descripcion</IonLabel>
                      <IonInput ref={descriptionInput} type="text"></IonInput>
                  </IonItem>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Comienza a las:</IonLabel>
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

      </React.Fragment>
    );
  };
  

export default AddActivity;