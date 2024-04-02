import { Elysia } from "elysia";
const app = new Elysia()

app.get('/', () => Bun.file('src/index.html'))

app.get('/style.css', () => Bun.file('src/style.css'))

app.get('/script.js', () => Bun.file('src/script.js'))

app.listen(3000);

console.log(
  `Server running at ${app.server?.hostname} and the port is ${app.server?.port}`
);


