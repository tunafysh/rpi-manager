const currentURL = new URL(window.location.href);

let buttonOn = document.getElementById('ledonbutton');
let buttonOff = document.getElementById('ledoffbutton');



// Add event listener for 'change' event on toggleBtn1
buttonOn.addEventListener('click', e =>{
    const btn1 = bootstrap.Button.getInstance(buttonOff)
    btn1.toggle()
})

buttonOff.addEventListener('click', e =>{
    const btn2 = bootstrap.Button.getInstance(buttonOn)
    btn2.toggle()
})

let ws = new WebSocket("ws://localhost:3000/ws");

// Connection opened
ws.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
    ws.send("Hello Server!")
});

// Listen for messages
ws.addEventListener("message", (event) => {
    // ws.send("Hello Server!")
    console.log(currentURL)
});

