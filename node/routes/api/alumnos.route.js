const router = require('express').Router();
const alumnoModel = require('../../models/alumno.model');


router.get('/', async (req, res) => {

    try {
        const [result] = await alumnoModel.getAll()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

router.delete('/:idUser', async (req, res) => {
    console.log(req.params.idUser);
    try {
        const [result] = await alumnoModel.deleteById(req.params.idUser)
        res.json(result)

    } catch (error) {
        res.json(error)
    }

});

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await alumnoModel.create(req.body)

        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})



router.put('/:idUSer', async (req, res) => {
    try {
        const [result] = await alumnoModel.update(req.params.idUSer, req.body)
        res.json(result)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
});

module.exports = router;