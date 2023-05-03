import React, {useState} from "react";

const books: any[] = [
    {
      "id": 1,
      "title": "Gullivers Travels",
      "author": "Blanchard Farmer",
      "publisher": "Geekus",
      "language": "English",
      "available": true
    },
    {
      "id": 2,
      "title": "Associate Professor",
      "author": "Middleton Webster",
      "publisher": "Zillatide",
      "language": "English",
      "available": false
    },
    {
      "id": 3,
      "title": "Don Quijote De La Mancha",
      "author": "Matthews Mosley",
      "publisher": "Sulfax",
      "language": "English",
      "available": false
    },
    {
      "id": 4,
      "title": "One Hundred Years of Solitude",
      "author": "Judy Morrow",
      "publisher": "Ozean",
      "language": "English",
      "available": true
    },
    {
      "id": 5,
      "title": "Gullivers Travels",
      "author": "Kris Woodard",
      "publisher": "Niquent",
      "language": "Spanish",
      "available": true
    },
    {
      "id": 6,
      "title": "The Divine Comedy",
      "author": "Hodge Buck",
      "publisher": "Synkgen",
      "language": "Spanish",
      "available": true
    },
    {
      "id": 7,
      "title": "Odyssey",
      "author": "Alyssa Levy",
      "publisher": "Fuelworks",
      "language": "Italian",
      "available": true
    },
    {
      "id": 8,
      "title": "Attornery",
      "author": "Jewel Pope",
      "publisher": "Lunchpod",
      "language": "Spanish",
      "available": true
    },
    {
      "id": 9,
      "title": "Copywriter",
      "author": "Boyer Ford",
      "publisher": "Frenex",
      "language": "Spanish",
      "available": true
    },
    {
      "id": 10,
      "title": "Madame Bovary",
      "author": "Kitty Thompson",
      "publisher": "Bleeko",
      "language": "Italian",
      "available": true
    }
  ]

function Table() {

    const [list, setList] = useState(books);
    const [filterTitle, setFilterTitle] = useState('')
    const [filterAuthor, setFilterAuthor] = useState('')

    const handleChangeTitle = (event: any) => {
        setFilterTitle(event.target.value);
    }

    const handleChangeAuthor = (event: any) => {
        setFilterAuthor(event.target.value);
    }

    const handleFilter = () => {
        setList(
            () => {
                return books.filter(
                    (todo) => {
                        return todo.title.toLowerCase().indexOf(filterTitle.toLowerCase()) != -1 && todo.author.toLowerCase().indexOf(filterAuthor.toLowerCase()) != -1;
                    }
                )
            }
        );
    }

    return (
        <div>
            <h1>Book's Catalog</h1>

            Filtri: 
            <input type="text" value={filterTitle} placeholder="TITOLO" onChange={handleChangeTitle}/>
            <input type="text" value={filterAuthor} placeholder="AUTORE" onChange={handleChangeAuthor}/>
            <button onClick={handleFilter}>Filtra</button>

            <table>
                <tr>
                    <th>TITOLO</th>
                    <th>AUTORE</th>
                    <th>CASA EDITRICE</th>
                    <th>LINGUA</th>
                    <th>DISPONIBILE</th>
                </tr>
                {list.map((book) => {
                    return <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.language}</td>
                        <td>{book.available ? "SI" : "NO"}</td>
                        </tr>
                    }
                )}
            </table>
        </div>
    );
}

export default Table;