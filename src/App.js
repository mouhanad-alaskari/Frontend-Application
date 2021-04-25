import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { useStore } from './Hooks';
import Routes from './Routes';

import './App.css';

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
