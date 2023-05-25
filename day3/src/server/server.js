import { createServer } from "miragejs";

export default function Server() {
    createServer({
        routes() {
            this.get("api/books")
        }
    })
}