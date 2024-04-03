const currentURL = new URL(window.location.href);

let ledconfig = {
    pin: Number,
    status: Boolean
}

ledconfig.pin = 3
ledconfig.output = true
ledconfig.status = false

let ws = new WebSocket("ws://localhost:3000/");

// Connection opened
ws.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
    ws.send("Hello Server!")
});

// Listen for messages
ws.addEventListener("message", (event) => {
    // ws.send("Hello Server!")
    console.log(event.data)
});



let onswitchlbl = document.getElementById("OnSwitchLabel");

let onswitch = document.getElementById('OnSwitch');
onswitch.addEventListener('click', () => {
    if (onswitch.checked) {
        onswitchlbl.innerHTML = "On"
        console.log('on')
        ledconfig.status = true
        ws.send(JSON.stringify(ledconfig))
    } else {
        onswitchlbl.innerHTML = "Off"
        console.log('off')
        ledconfig.status = false
        ws.send(ledconfig.stringify())
    }
})