const express = require('express');
const logger = require('./logger')

const router = express.Router();

//router.get('/test-me', function (req, res) {
///   console.log('------------------')
//   console.log(req)
//   console.log('------------------')
//   console.log('These are the request query parameters: ', req.query)
//   res.send('My first ever api!')
//});

router.get('/missnumber', function(req, res) {
    //  console.log('------------------')
    //  console.log(req)
    //  console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    // res.send('My first ever api!')
    const numArr = [1, 2, 3, 4, 5, 7, 8, 9];

    const missing = [];

    for (let i in numArr) {
        // get the size of the gap
        let x = numArr[i] - numArr[i - 1];
        // start filling in the gap with `1`
        let diff = 1;
        // while there's still a gap, push the correct numbers
        // into `missing`, calculated by the number + diff
        while (diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;
        }
    }
    res.send(missing)
        // problem 1

});

router.get('/missnumber2', function(req, res) {
    //  console.log('------------------')
    //  console.log(req)
    //  console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    // res.send('My first ever api!')
    const numArr = [33, 34, 35, 37, 38];

    const missing = [];

    for (let i in numArr) {
        // get the size of the gap
        let x = numArr[i] - numArr[i - 1];
        // start filling in the gap with `1`
        let diff = 1;
        // while there's still a gap, push the correct numbers
        // into `missing`, calculated by the number + diff
        while (diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;
        }
    }
    res.send(missing)
        // problem 1

});

router.get('/movies', function(req, res) {
    const arry = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]
    res.send(arry);
});
// problem 2 and 3
router.get('/movies/:indexNumber', function(req, res) {
    const arryy = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"];
    let mom = arryy.length
    const index = req.params.indexNumber
    if (index > mom) {
        res.send("please enter a valid number")
    } else { res.send('the' + index + ' movie is :' + arryy[index]) }

});
// problem 4
router.get('/flims', function(req, res) {
    const arryyy = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(arryyy);
});
// problem 5
router.get('/flims/:filmld', function(req, res) {
    const arryy = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];


    const arijit = req.params.filmld
    if (arijit > arryy.length) {
        res.send("please enter a valid number")
    } else {
        for (let i = 0; i < arryy.length; i++) {
            if (arryy[i].id == arijit)
                res.send(arryy[i])
        }
    }

});



module.exports = router;
// adding this comment for no reason