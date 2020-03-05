import React from 'react';
import { render } from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
const Book = ({title, author, pages})  => {
  return (
    <section>
      <h2>{title}</h2>
      <h2>by: {author}</h2>
      <h2>Pages: {pages} pages</h2>
    </section>
  )
}

const Library = ()  => {
  return (
    <div>
      <Book title="The Sun Rises" author="Ernest Hemingway" pages={260}/>
    </div>
  )
}

render(
  <div>
    <Library />
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
