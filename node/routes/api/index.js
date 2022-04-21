const router = require('express').Router();

router.use('/alumnos', require('./alumnos.route'));


module.exports = router;