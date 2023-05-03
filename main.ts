
console.log(String.fromCharCode(64)) //vratí to nějaký znak; 64 je @
    const data = '@dfhd'
    console.log("@dfhd".charCodeAt(0))
    console.log(data.charCodeAt(1))

function pack(x: number, y: number, z: number): number {
    let xmod = x + 1024 //posun do klad. intervalu
    xmod = Math.floor(xmod / 8) // redukce intervalu

    return 0 
}

input.onButtonPressed(Button.A, function() {
    let x = 1022; // <-1024; 1023>
    let y = -950;
    let z = 12; 
 
    //radio.sendString("")
    radio.sendNumber(pack(x, y, z))
})

radio.onReceivedNumber(function(receivedNumber: number) {
    basic.showNumber(receivedNumber)
})