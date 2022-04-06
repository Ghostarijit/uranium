const express = require('express');
var _ = require('lodash')
const logger = require('./logger')
const dad = require("../loggerr/loggerr.js");
const help4 = require("../util/helper.js");
const park4 = require("../validator/formatter.js");
const router = express.Router();

router.get('/test-me', function(req, res) {
    console.log('I am inside the first route handler')
    console.log('The endpoint value is', logger.endpoint)
    console.log('Calling log function')
    logger.logging()
    dad.mom()
    help4.help1()
    help4.help2()
    help4.help3()
    park4.park1()
    park4.park2()
    park4.park3()
    res.send('My first ever api!')
});

router.get('/test-me2', function(req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function(req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function(req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function(req, res) {
    res.send('My first ever api!')
});

router.get('/hellow', function(req, res) {
    const mylist = [
        'jun',
        "feb",
        "march",
        "april",
        "mey",
        "june",
        "julay",
        "augst",
        "sep",
        "oct",
        "nov",
        "dec",
    ]

    console.log(_.chunk(mylist, 4));
    const mylistt = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(_.tail(mylistt))

    const mylisttt = function union() {

    }
    const arr1 = [1, 4, 7, 4]
    const arr2 = [1, 3, 5, 10]
    const arr3 = [4, 8, 7, 9]
    const arr4 = [5, 8, 7, 4]
    const arr5 = [1, 3, 7, 2]
    const arr6 = [11, 4, 7, 5]
    console.log(_.union(arr1.arr2, arr3, arr4, arr5, arr6))


    const pairs = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"]
    ]
    console.log(_.fromPairs(pairs))

    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason