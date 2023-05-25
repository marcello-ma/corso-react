import { ChangeEvent, useState, useEffect } from 'react';

import './App.css';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import Book from './models/bookModel';
import useBooks from './useBooks';

function App() {
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');
    const [books, loading] = useBooks(authorFilter, titleFilter);

    return (
        <div className="app-body">
            <h1 className="title">Books Catalog</h1>
            <div className="filters">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const author = formData.get('author') as string;
                    const title = formData.get('title') as string;

                    setAuthorFilter(author);
                    setTitleFilter(title);
                }}>
                    <p>Filters:</p>
                    <input type="text" name="author" placeholder={'author'} />
                    <input type="text" name="title" placeholder={'title'} />
                    <button className="btn btn-primary" type='submit'>Search</button>
                </form>
            </div>
            <Table books={books as Book[]} loading={loading as boolean} />
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
