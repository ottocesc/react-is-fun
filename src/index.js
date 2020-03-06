import React from 'react';
import { render } from 'react-dom';


let bookList = [
  {"title": "The Sun", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Un Capitano", "author": "Francesco Totti", "pages": 560},
  {"title": "Lord of the rings 1", "author": "JJR Tolk", "pages": 266},
  {"title": "Lord of the rings 2", "author": "JJR Tolk", "pages": 266},
  {"title": "Lord of the rings 3", "author": "JJR Tolk", "pages": 266}
]
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
const Book = ({title, author, pages})  => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

class Library extends React.Component {
  state = { open: false }

  toggleOpenClosed = () => {
  this.setState(prevState => ({
    open: !prevState.open
  }))

  }
  render() {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
      <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.author}/>
        )}
      </div>
    )
  }
}


render(
  <div>
    <Library books={bookList} />
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
