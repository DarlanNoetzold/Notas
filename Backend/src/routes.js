const express = require('express');
const routes = express.Router();


const AnnotationsController = require('./controllers/AnnotationsController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

routes.post('/annotations', AnnotationsController.create);
routes.get('/annotations', AnnotationsController.read);
routes.delete('/annotations/:id', AnnotationsController.delete);

routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

routes.post('/contents/:id', ContentController.update);

module.exports = routes;
