import { useEffect, useState } from "react";
import Book from "./models/bookModel";

export default function useBooks(author: string, title: string) {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        requestBooks(author, title);
    }, [author, title]);

    async function requestBooks(author: string, title: string) {
        setLoading(true);
        const searchParams = new URLSearchParams({ author: author, title: title });
        const res = await fetch("api/books?" + searchParams);
        const json = await res.json();
        setBooks(json.books);
        setLoading(false);
    }

    return [books, loading] as const;
}