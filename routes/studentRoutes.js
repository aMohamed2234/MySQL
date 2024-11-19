const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.post('/addStudent', studentController.addStudent)

router.get('/getAllStudents', studentController.getAllStudents)

router.get('/getStudent/:student_id', studentController.getStudent)

router.patch('/UpdateStudent/:student_id', studentController.updateStudent)

router.delete('/deleteStudent/:student_id', studentController.deleteStudent)

module.exports = routes