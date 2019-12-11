const express = require('express');
const cors = require('cors');

const student_router = express.Router();
student_router.use(cors());


module.exports = student_router;