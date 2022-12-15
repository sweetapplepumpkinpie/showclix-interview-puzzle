const fs = require("fs")
const { init } = require("./init.js")
const { reserve } = require("./reserve.js")

const dimensions = fs.readFileSync("dimension.txt", { encoding: "utf-8" })
const txt = fs.readFileSync("input.txt", { encoding: "utf-8" })
const [rows, cols] = dimensions.split(" ")
const inputs = txt.split("\r\n")
const reserved = inputs.shift().split(" ")

const map = init(+rows, +cols, reserved)

let output = ""

inputs.map((input) => {
  output += reserve(map, parseInt(input)) + "\r\n"
})
output += reserve(map, null)

fs.writeFileSync("output.txt", output)

console.log("Done")
