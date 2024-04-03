import { Elysia } from "elysia";
const app = new Elysia()
const gpio = require("onoff").gpio

app.get('/', () => Bun.file('src/index.html'))

app.get('/style.css', () => Bun.file('src/style.css'))

app.get('/script.js', () => Bun.file('src/script.js'))

app.ws('/ws', {
  open: (message) => {
    console.log('open')
    // console.log(message)
  },
  message: (message) => {
    message.send('Hello client!')
    console.log(message)
  },
  close: () => {
    console.log('close')
  }
})

app.listen(3000);

console.log(
  `Server running at ${app.server?.hostname} and the port is ${app.server?.port}`
);


