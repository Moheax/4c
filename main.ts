basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (!(input.buttonIsPressed(Button.B))) {
            basic.showString("a")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (!(input.buttonIsPressed(Button.A))) {
            basic.showString("b")
        }
    }
})
