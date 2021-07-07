const Annotations = require('../models/AnnotationData');


module.exports = {

    async read(request, response){
        const annotationList = await Annotations.find();

        return response.json(annotationList);

    },

    create(request, responde){
        console.log(request.body);
        const {title, notes, priority} = request.body;
        
    }
    
}