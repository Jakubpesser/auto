radio.setGroup(3)
radio.setFrequencyBand(7)

let btnA = false
let btnB = false

basic.forever(function() {
    if (btnA == true) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -250)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
    }
    if (btnB == true) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
})

radio.onReceivedValue(function(name: string, value: number) {
    if (name == "btnA") {
        btnA = (value == 1)
    }
    if (name == "btnB") {
        btnB = (value == 1)
    }
})