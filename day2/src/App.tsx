import React, {useState} from 'react';
import Table from './components/Table';
import './App.css';

const data = require('./data/lezione1.json');

function App() {

    console.log(data)
    const [books, setBooks] = useState(data);
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');

    const onChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthorFilter(event.target.value)
    };

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitleFilter(event.target.value)
    };

    const onSearch = () => {
      setBooks(() => {
        return data.filter(
          (book: any) => book.author.toLowerCase().includes(authorFilter.toLowerCase()) && book.title.toLowerCase().includes(titleFilter.toLowerCase())
        );
      });
    }

  return (
    <div className='App'>
    <h1>Book's Catalog</h1>
    
      <p>Filters: <input type='text' value={authorFilter} onChange={(e) => onChangeAuthor(e)} placeholder='AUTORE'/>
        <input type='text' value={titleFilter} onChange={(e) => onChangeTitle(e)} placeholder='TITOLO'/>
      <br/>
        <button onClick={() => {onSearch()}}>Search</button>
      </p>
      
      <Table books={books}/>
    </div>
  );
}

export default App;
