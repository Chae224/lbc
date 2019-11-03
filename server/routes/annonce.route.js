const express = require('express');
const router = express.Router();

const annonce_controller = require('../controllers/annonce.controller');

router.post('/create', annonce_controller.annonce_create);

router.get('/:id', annonce_controller.annonce_details);

router.put('/:id/update', annonce_controller.annonce_update);

router.delete('/:id/delete', annonce_controller.annonce_delete);

module.exports = router;