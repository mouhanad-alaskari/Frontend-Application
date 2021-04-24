import { Provider } from 'react-redux';
import { useStore } from './Hooks';
import Landing from '../src/Screens/MainPage';

import './App.css';

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
