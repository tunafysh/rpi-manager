if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
    $(function(){ console.log("jQuery + DOM loaded."); });
}

const currentURL = new URL(window.location.href);

let ledconfig = {
    pin: Number,
    status: Boolean
}

ledconfig.pin = 3
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

let onswitch = $('#OnSwitch');
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