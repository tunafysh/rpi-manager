import { ELYSIA_RESPONSE, Elysia } from "elysia";
const app = new Elysia()
// const gpio = require("onoff").gpio

app.get('/', () => Bun.file('src/index.html'))

app.get('/script.js', () => Bun.file('src/script.js'))

app.ws('/', {
  message: (ws, message) => {
    console.log(message)
    let stringifiedconfig = JSON.stringify(message);

    let ledconfig = JSON.parse(stringifiedconfig);

    console.log(`led with ${ledconfig.pin} and status ${ledconfig.status} created`)

    if(ledconfig.status === true){
      // led.writeSync(1);
      console.log("led on")
    }
    else{
      console.log("led off")
    }
  },
})

app.listen(3000);

console.log(
  `Server running at ${app.server?.hostname} and the port is ${app.server?.port}`
);


