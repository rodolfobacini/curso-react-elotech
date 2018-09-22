import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

// import firebase from 'firebase';
// import config from './config';

// firebase.initializeApp(config);
// firebase.firestore().settings({
//     timestampsInSnapshots: true
// });
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
