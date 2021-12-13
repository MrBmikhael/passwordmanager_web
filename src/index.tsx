import React from 'react'
import ReactDOM from 'react-dom'
// import _ from 'lodash'
import App from './Components/App'
import reportWebVitals from './reportWebVitals'
import store from './Redux'
import { Provider } from 'react-redux'
// import { GoogleApiProvider } from 'react-gapi'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GoogleApiProvider clientId={_.get(process.env, 'REACT_APP_GOOGLE_API_KEY', '')}> */}
      <App />
      {/* </GoogleApiProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
