let l = function() {
    console.log("functionup")
}
let m = function() {
    console.log("FUNCTIONUP".toLocaleLowerCase())
}
let n = function() {
    console.log("functionup".toLocaleUpperCase())
}
module.exports.park1 = l
module.exports.park2 = m
module.exports.park3 = n