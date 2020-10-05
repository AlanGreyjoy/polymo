const jwt = require('jsonwebtoken')
const db = require('../models/index')
const Player = db.Player

verifyToken = (req) => {
    console.log('verifyToken')
    console.log(req)
}