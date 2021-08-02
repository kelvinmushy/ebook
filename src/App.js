import React from "react";

import SinglePagePDFViewer from "./try1";
//import AllPagesPDFViewer from "./components/pdf/all-pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage"

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import {
  BrowserRouter as Router,
  Route,
 // Link,
  // NavLink,
  Switch,

} from "react-router-dom";


import "./styles.css";
 const url="https://ebook.codeafrica.co.tz/upload/pdf/0890-2017-12-14.pdf"
export default function App() {
  return (
    <div className="App">
      {/* <SinglePagePDFViewer pdf={url} />

      <hr /> */}
      <Router>
          <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route exact path="/read" component={SinglePagePDFViewer}/>
        </Switch>
      </Router>
    </div>
  );
}
