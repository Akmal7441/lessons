const express = require('express')
const router = express.Router()

const lessons = [
    { name: "English", time: "08:00", id: 1 },
    { name: "Physics", time: "09:00", id: 2 },
    { name: "Mathematics", time: "10:00", id: 3 },
    { name: "Chemistry", time: "11:00", id: 4 },
  ];


router.get('/', (req, res) => {
    res.status(200).send(lessons)
})


router.get('/lesson', (req, res) => {
    
    const lesson = lessons.find(les => les.name === req.query.name)
    res.status(200).send(lesson)
})

module.exports = router