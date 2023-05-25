import { FC } from 'react';

import './Table.css'

interface Props {
    books: any[];
}

const Table: FC<Props> = ({ books }) => {
    return <table className="table">
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
                        <td>{b.available}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}

export default Table;
