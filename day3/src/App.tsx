import { ChangeEvent, useState } from 'react';

import './App.css';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import Book from './models/bookModel';

const data = require('./data/lezione1.json');

function App() {
    const [books, setBooks] = useState<Book[]>(data);
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');

    const onChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthorFilter(event.target.value);
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
    }

    const onSearch = () => {
        setBooks(() => {
            return data.filter(
                (b: any) => (b.title.toLowerCase().includes(titleFilter.toLowerCase())) && (b.author.toLowerCase().includes(authorFilter.toLowerCase()))
            );
        });
    }

    return (
        <div className="app-body">
            <h1 className="title">Books Catalog</h1>
            <div className="filters">
                <p>Filters:</p>
                <input type="text" value={authorFilter} onChange={(e) => onChangeAuthor(e)} placeholder={'author'} />
                <input type="text" value={titleFilter} onChange={(e) => { onChangeTitle(e) }} placeholder={'title'} />
                <button className="btn btn-primary" onClick={() => { onSearch() }}>Search</button>
            </div>
            <Table books={books} />
            {/* <div className="cards">
                {
                    books.map((book: Book, i: number) => (
                        <Card key={i} book={book} />
                    ))
                }
            </div> */}
        </div>
    );
}

export default App;
