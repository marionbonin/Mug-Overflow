// == Import : npm
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


// == Import : local
import store from 'src/store';
// Composants
import App from 'src/components/App';

// == Render

const rootReactElement = (
  <BrowserRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
