import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey } from '@material-ui/core/colors';

import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: '#757575',
    },
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


