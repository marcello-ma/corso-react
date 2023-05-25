import { useState, useEffect } from "react";
import Book from "./models/bookModel";

export default function useBooks(author = '', title = '') {
    const [ books, setBooks ] = useState<Book[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [ status, setStatus ] = useState('unloaded');

    useEffect(() => {
        requestBooks();

        async function requestBooks() {
            setLoading(true);
            // const searchParams = new URLSearchParams({ author: author, title: title })
            // const res = await fetch("api/books?" + searchParams);
            const res = await fetch("api/books");
            const json = await res.json();
            setBooks(json);
            setLoading(false);
        }
    }, [author, title])

    return [books, loading, status];

}