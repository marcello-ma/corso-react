import { Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

import './App.css';
import Table from './components/Table/Table';
import useBooks from './useBooks';

function App() {
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');
    const [books, loading] = useBooks(authorFilter, titleFilter);

    return (
        <div className="app-body">
            <Heading className="title" as="h1" >Books Catalog</Heading>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const author = formData.get('author') as string;
                const title = formData.get('title') as string;

                setAuthorFilter(author);
                setTitleFilter(title);
            }}>
                <div className="filters">
                    <p>Filters:</p>
                    <div className="input-filter">
                        <Input size="sm" type="text" name="author" placeholder={'Author'} />
                    </div>
                    <div className="input-filter">
                        <Input size="sm" type="text" name="title" placeholder={'Title'} />
                    </div>
                    <Button colorScheme="messenger" type="submit">Search</Button>
                </div>
            </form>
            <Table
                books={books}
                loading={loading}
            />
        </div>
    );
}

export default App;
