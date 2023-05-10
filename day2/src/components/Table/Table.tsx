import React from 'react';
import { FC } from 'react';

interface Props{
    books: any[];
}

const Table: FC<Props> = ({books}) => {
    return <table>
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
                    (book) => <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.language}</td>
                        <td>{book.available}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}

export default Table;