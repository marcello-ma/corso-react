import { createServer, Model } from "miragejs";
import { BOOKS } from "./db/books";

const DEFAULT_CONFIG = {
  environment: "development",
  namespace: "api",
};

export default function Server({ environment, namespace } = DEFAULT_CONFIG) {
  createServer({
    environment,
    namespace,
    models: {
      books: Model,
    },
    seeds(server) {
      for (const book of BOOKS) {
        server.create("book", {
          id: book.id,
          title: book.title,
          author: book.author,
          publisher: book.publisher,
          language: book.language,
          available: book.available,
        });
      }
    },
    routes() {
      this.get(
        "/books",
        (schema, request) => {
          const { queryParams } = request;
          const { author, title } = queryParams;

          return schema.books.where(
            (b) =>
              b.title.toLowerCase().includes(title.toLowerCase()) &&
              b.author.toLowerCase().includes(author.toLowerCase())
          );
        },
        {
          timing: 2000,
        }
      );

      this.get("/books/:id", (schema, request) => {
        const { params } = request;
        const id = params.id;

        return schema.books.find(id);
      });

      this.post("/books", (schema, request) => {
        const { requestBody } = request;
        const attrs = JSON.parse(requestBody);

        return schema.books.create(attrs);
      });

      this.patch("/books/:id", (schema, request) => {
        const { requestBody, params } = request;
        const newAttrs = JSON.parse(requestBody);
        const id = params.id;
        const book = schema.books.find(id);

        return book.update(newAttrs);
      });

      this.delete("/books/:id", (schema, request) => {
        const { params } = request;
        const id = params.id;

        return schema.books.find(Number(id)).destroy();
      });
    },
  });
}
