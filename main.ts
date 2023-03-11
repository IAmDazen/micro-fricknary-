input.onButtonPressed(Button.A, function () {
    String2 = "" + String2 + "1"
})
input.onButtonPressed(Button.AB, function () {
    Run += 1
})
input.onButtonPressed(Button.B, function () {
    String2 = "" + String2 + "0"
})
let String2 = ""
let Run = 0
String2 = ""
basic.forever(function () {
    if (Run == 0) {
        basic.showString(String2)
    } else if (String2 == "100101") {
        basic.showString("a")
    } else if (String2 == "100110") {
        basic.showString("A")
    } else if (String2 == "1001011") {
        basic.showString("b")
    } else if (String2 == "1001110") {
        basic.showString("B")
    } else if (String2 == "100101011") {
        basic.showString("ab")
    } else if (String2 == "100101110") {
        basic.showString("aB")
    } else if (String2 == "100110110") {
        basic.showString("AB")
    } else if (String2 == "100110011") {
        basic.showString("Ab")
    } else if (String2 == "100101101") {
        basic.showString("ba")
    } else if (String2 == "100101110") {
        basic.showString("bA")
    } else if (String2 == "100111010") {
        basic.showString("BA")
    } else if (String2 == "100111001") {
        basic.showString("Ba")
    } else if (String2.length > 9) {
        basic.showString("Error: CommandExeption Number Lesser Than Command")
    }
})
