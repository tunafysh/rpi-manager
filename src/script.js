const currentURL = new URL(window.location.href);



// .addEventListener()

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

let onswitchlbl = document.getElementById("OnSwitchLabel");

let onswitch = document.getElementById('OnSwitch');
onswitch.addEventListener('click', () => {
    if (onswitch.checked) {
        onswitchlbl.innerHTML = "On"
        console.log('on')
        ws.send("on")
    } else {
        onswitchlbl.innerHTML = "Off"
        console.log('off')
        ws.send("off")
    }
})