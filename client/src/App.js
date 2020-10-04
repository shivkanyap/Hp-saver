import React from 'react';
import logo from './logo.svg';
import AdduserModal from './components/Register'
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <h3>Hello</h3>
      <AdduserModal/>
    </div>
    </Provider>
  );
}

export default App;
