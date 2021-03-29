import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import TrevelerMonitor from '../pages/TrevelerMonitor';
import DestiniesToChose from '../pages/DestiniesToChose';
import ChosedTravel from '../pages/ChosedTravel';
import Home from '../pages/Home';
import MyFlys from '../pages/MyFlys';
import DestiniesMonitor from '../pages/DestiniesMonitor';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" exact component={Home} />
    <Route path="/monitor-de-destinos" exact component={TrevelerMonitor} />
    <Route path="/escolha-seu-destino" exact component={DestiniesToChose} />
    <Route path="/destino-escolhido" exact component={ChosedTravel} />
    <Route path="/meus-voos" exact component={MyFlys} />
    <Route path="/destinos-monitorados" exact component={DestiniesMonitor} />
  </Switch>
);

export default Routes;
