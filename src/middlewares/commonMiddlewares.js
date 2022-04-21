const Check = function(req, res, next) {
    const free = req.headers["isfreeappuser"]

    if (free == undefined) {
        res.send("please give me isFreeAppUser")
    } else {
        console.log(" isFreeAppUser present")
        next()
    }
    //  next()
}

module.exports.Check = Check
    //module.exports.mid2= mid2
    //module.exports.mid3= mid3
    //module.exports.mid4= mid4