input.onButtonPressed(Button.A, function () {
    if (Throttle <= 40) {
        Throttle += -5
    } else {
        Throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Arm) {
        Arm = 0
    } else {
        Arm = 1
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (Throttle < 40) {
        Throttle += 5
    } else {
        Throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    Arm = 0
    Throttle = 0
})
let Pitch = 0
let Roll = 0
let Arm = 0
let Throttle = 0
let RadioGroup = 1
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.forever(function () {
    let Yaw = 0
    Roll = input.rotation(Rotation.Roll)
    Pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
    if (Arm) {
        led.plot(0, 0)
        led.plot(0, 4 - Throttle / 25)
        led.plot((Roll + 45) / 22.5, (Pitch + 45) / 22.5)
    }
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
    radio.sendValue("Y", Yaw)
})
