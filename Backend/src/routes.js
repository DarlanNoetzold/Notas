const express = require('express');
const routes = express.Router();


const AnnotationsController = require('./controllers/AnnotationsController');

routes.post('/annotations', AnnotationsController.create);
routes.get('/annotations', AnnotationsController.read);
routes.delete('/annotations/:id', AnnotationsController.delete);

module.exports = routes;
