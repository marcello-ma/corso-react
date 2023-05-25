import { createServer } from "miragejs";
const BOOKS = require('./db/books.json')

export default function Server() {
    createServer({
        routes() {
            this.get("api/books", (schema, request) => {
                console.log(request);
                const { queryParams } = request;

                if (Object.keys(queryParams).length > 0) {
                    const { author, title } = queryParams;
                    return BOOKS.filter(
                        (b) =>
                            b.title.toLowerCase().includes(title.toLowerCase()) &&
                            b.author.toLowerCase().includes(author.toLowerCase())
                    );
                }
                // {
                //     timing: 5000;
                // }

                return BOOKS;
            });
        }
    })
}