import React from 'react';
import { render } from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
const Library = ()  => {
  return (
    <div>
      Welcome to the Library
    </div>
  )
}

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

const title = React.createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)

render(
  <div>
    <Library />
    <Library />
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
