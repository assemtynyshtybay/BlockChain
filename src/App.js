import React from 'react';

import { Header } from './components';
import { Home, Cart} from './pages';
import { Route } from 'react-router-dom';
import Buy from './pages/Buy';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/buy" component={Buy} exact/>
      </div>
    </div>
  );
}

export default App;
