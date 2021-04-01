import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'


const App = lazy(()=> import("./App"))

ReactDOM.render(
  <>
  <BrowserRouter>
  <Suspense fallback={<p className="lead">Please wait ...</p>}>
  <App />  
  </Suspense>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


