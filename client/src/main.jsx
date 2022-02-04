import React from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'
import App from '@/App'
import { store } from '@/store'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import moment from 'moment';
import 'moment/locale/tr';

moment.locale("tr");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
