import { FC } from 'react';
import Book from '../../models/bookModel';

import './Table.css'

interface Props {
    books: Book[];
    loading: boolean;
}

const Table: FC<Props> = ({ books, loading }) => {
    return (
        <>
            {
                loading ? 'Loading...' : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>TITOLO</th>
                                <th>AUTORE</th>
                                <th>CASA EDITRICE</th>
                                <th>LINGUA</th>
                                <th>DISPONIBILE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map(
                                    (b, index) => <tr key={index}>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.publisher}</td>
                                        <td>{b.language}</td>
                                        <td>{b.available ? 'Yes' : 'No'}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                )
            }
        </>
    );
}

export default Table;
