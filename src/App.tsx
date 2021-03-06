import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "./theme/variables.css";
import { moon } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import React from 'react';
import {bodyOutline, informationCircle, newspaperOutline} from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';
import Celular from './pages/infoCel/celular';
const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu side="start" contentId="scheduleAppM1">
      <IonHeader>
        <IonToolbar >
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
          <IonItem routerLink="/all-activities" routerDirection="none" lines="none" >
          <IonIcon color="medium" slot="start" icon={bodyOutline}></IonIcon>
          <IonLabel>Actividades</IonLabel>
          </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
          <IonItem routerLink="/add-activities" routerDirection="none" lines="none" >
          <IonIcon color="medium" slot="start" icon={newspaperOutline}></IonIcon>
          <IonLabel>Agregar Actividad</IonLabel>
          </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
          <IonItem routerLink="/celular" routerDirection="none" lines="none" >
          <IonIcon color="medium" slot="start" icon={informationCircle}></IonIcon>
          <IonLabel>Informacion</IonLabel>
          </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
          <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        </IonMenuToggle>

        </IonList>
      </IonContent>
    </IonMenu>
    <ActivitiesContextProvider>
      <IonRouterOutlet id="scheduleAppM1">
        <Route path="/all-activities" component={AllActivities} exact/>
        <Route path="/add-activities" component={AddActivity} exact/>
        <Route path="/celular" component={Celular} exact/>
        <Redirect to ="/all-activities"/>

      </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
