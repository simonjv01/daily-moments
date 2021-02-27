import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home as homeIcon, settings as settingsIcon  } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import EntryPage from './pages/EntryPage';

const App: React.FC = () => {
  return (
    <IonApp>
     <IonReactRouter>
       <IonTabs>
       <IonRouterOutlet>
      <Route exact path="/entries">
        <HomePage />
      </Route>
      <Route exact path="/entries/:id">
        <EntryPage />
      </Route>
      <Route exact path="/settings">
        <SettingsPage />
      </Route>
      <Redirect exact path="/" to="/entries" />
      </IonRouterOutlet>

      {/** Bottom navigation bar */}

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/entries">
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
     </IonReactRouter>
    </IonApp>
  );
};

export default App;
