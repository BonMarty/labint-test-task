import { Provider } from 'react-redux';
import { HomePage } from '../pages';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
