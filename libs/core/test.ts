let i = 1
let f = 0.5
let plus = i + f
let minus = i - f


loops.forever(() => {
    let r = Math.randomRange(0, 100)
    serial.writeValue("R", r)
    loops.pause(1000)
})
